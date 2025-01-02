import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";

const siteViewPath = "/src/assets/images/project-one/site-view/SITE";
const interiorViewPath =
  "/src/assets/images/project-one/interior-concept/INTERIOR";
const exteriorViewPath =
  "/src/assets/images/project-one/exterior-concept/EXTERIOR";

const AccordionProjects = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger className="text-xl">
        Hobbie Farm Project
      </AccordionTrigger>
      <AccordionContent>
        A small, space-efficient housing concept designed as a foundation for
        sustainable living. This prototype serves as a starting point, with
        plans to integrate eco-friendly features and innovations during the
        building process.
        <div className="py-4">
          <Accordion.Root className="AccordionRoot" type="multiple" collapsible>
            <Accordion.Item className="AccordionItem" value="item-1">
              <AccordionTrigger>Site View Images</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col md:flex-row flex-wrap">
                  <div className="flex-1 basis-1/2">
                    <img
                      src={`${siteViewPath}-1.png`}
                      alt="Site View 1"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img
                      src={`${siteViewPath}-2.png`}
                      alt="Site View 2"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img
                      src={`${siteViewPath}-3.png`}
                      alt="Site View 3"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img
                      src={`${siteViewPath}-4.png`}
                      alt="Site View 4"
                      className="w-full"
                    />
                  </div>
                </div>
              </AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" value="item-2">
              <AccordionTrigger>Exterior Concept Images</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 basis-1/2">
                    <img
                      src={`${exteriorViewPath}-1.jpg`}
                      alt="Exterior Concept 1"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img
                      src={`${exteriorViewPath}-2.jpg`}
                      alt="Exterior Concept 2"
                      className="w-full"
                    />
                  </div>
                </div>
              </AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" value="item-3">
              <AccordionTrigger>Interior Concept Images</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col md:flex-row flex-wrap">
                  <div className="flex-1 basis-1/2">
                    <img
                      src={`${interiorViewPath}-1.jpg`}
                      alt="Interior Concept 1"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img
                      src={`${interiorViewPath}-2.jpg`}
                      alt="Interior Concept 2"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img
                      src={`${interiorViewPath}-3.jpg`}
                      alt="Interior Concept 3"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img
                      src={`${interiorViewPath}-4.jpg`}
                      alt="Interior Concept 4"
                      className="w-full"
                    />
                  </div>
                </div>
              </AccordionContent>
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
          className="w-full h-96"
        >
          <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
          </div>
        </model-viewer>
        <div className="italic text-center">
          A 3D-rendered model of a storage-unit-sized housing prototype, created
          to optimize space efficiency and a framework to integrate sustainable
          technologies
        </div>
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2" disabled>
      <AccordionTrigger className="italic text-xl">
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
        <ChevronDownIcon
          className="AccordionChevron text-green-700"
          aria-hidden
        />
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

export default AccordionProjects;
