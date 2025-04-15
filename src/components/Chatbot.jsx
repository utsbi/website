import * as React from "react";
import { Popover } from "radix-ui";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";

// import ollama from "ollama";
import { Ollama } from "ollama";

const Chatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");
  const messagesEndRef = React.useRef(null);
  const [streamedResponse, setStreamedResponse] = React.useState("");
  const initialSystemPrompt =
    "You are the SBI (Sustainble Building Initiative) assistant. Answer questions to the best of your ability. Never answer in markdown format or use any text formatting. Only answer in english. If the user asks who you are say you are the SBI assistant.";

  React.useEffect(() => {
    // Add the initial system message to the chat history, but don't display it
    // It will still be sent to the model as context
    setMessages([
      {
        text: "Hey there! I'm the SBI assistant. I am currently still a feature that is work in progress.",
        sender: "ai",
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, sender: "user" };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setInput("");

    // Add an empty AI message for the streaming response
    const aiMessage = { text: "", sender: "ai" };
    const newMessagesWithAI = [...newMessages, aiMessage];
    setMessages(newMessagesWithAI);

    try {
      const ollama = new Ollama({ host: "http://localhost:11434" });
      const chatHistory = [
        { role: "system", content: initialSystemPrompt },
        ...newMessages,
      ].map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      }));

      let partialResponse = "";

      const stream = await ollama.chat({
        model: "qwen2.5:7b",
        messages: chatHistory,
        stream: true,
      });

      for await (const part of stream) {
        partialResponse += part.message.content;
        setStreamedResponse(partialResponse);

        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1] = {
            ...aiMessage,
            text: partialResponse,
          };
          return updatedMessages;
        });
      }

      // The stream is complete, update the AI message with the full response
      const aiResponse = { text: partialResponse, sender: "ai" };
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = aiResponse;
        return updatedMessages;
      });
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorResponse = {
        text: "Sorry, I'm having trouble connecting to the server.",
        sender: "ai",
      };
      setMessages([...messages, newMessage, errorResponse]);
    }
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
          aria-label="Open Chatbot"
        >
          <MixerHorizontalIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="bg-white rounded-lg shadow-2xl p-4 m-0 flex flex-col w-[30vw] h-[60vh]"
          sideOffset={5}
        >
          <div className="scrollbar pb-2 flex-1 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-green-100 text-right"
                    : "bg-white text-left"
                }`}
              >
                <span className="font-bold">
                  {message.sender === "user" ? "You:" : "SBI:"}
                </span>{" "}
                {message.text}
              </div>
            ))}
            <div className="float-left clear-both" ref={messagesEndRef} />
          </div>
          <div className="mt-4 flex items-center font-OldStandardTT">
            <input
              type="text"
              className="flex-1 border rounded-md py-2 px-3 mr-2 border-solid border-gray-200 focus:border-none focus:outline-none focus:ring focus:ring-green-300 transition duration-200 ease-in-out"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button
              className="bg-green-500 hover:bg-green-700 text-white pt-3 pb-2 px-4 rounded-md"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
          <Popover.Close className="absolute top-1 right-1" aria-label="Close">
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default Chatbot;
