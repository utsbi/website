import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";

const AccordionDemo = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>Hobbie Farm Project</AccordionTrigger>
      <AccordionContent>
        A small, space-efficient housing concept designed as a foundation for
        sustainable living. This prototype serves as a starting point, with
        plans to integrate eco-friendly features and innovations during the
        building process.
        <div className=" pt-4">
          <Accordion.Root className="AccordionRoot" type="multiple" collapsible>
            <Accordion.Item className="AccordionItem" value="item-1">
              <AccordionTrigger>Site View Images</AccordionTrigger>
              <AccordionContent>PlaceHolder </AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" value="item-2">
              <AccordionTrigger>Exterior Concept Images</AccordionTrigger>
              <AccordionContent>PlaceHolder </AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" value="item-3">
              <AccordionTrigger>Interior Concept Images</AccordionTrigger>
              <AccordionContent>PlaceHolder </AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
        <model-viewer
          src="/models/SHED-REV-AA.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          tone-mapping="neutral"
          poster="poster.webp"
          shadow-intensity="1"
          exposure="0.50"
          shadow-softness="1"
          environment-image="legacy"
        >
          <div class="progress-bar hide" slot="progress-bar">
            <div class="update-bar"></div>
          </div>
        </model-viewer>
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2" disabled>
      <AccordionTrigger className="italic">
        Upcoming - Sustainable Family Home Project
      </AccordionTrigger>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

<script
  type="module"
  src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
></script>;

export default AccordionDemo;
