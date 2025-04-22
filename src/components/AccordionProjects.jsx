import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";
import "@google/model-viewer";

const siteViewPath = "/src/assets/images/project-one/site-view/SITE";
const interiorViewPath =
  "/src/assets/images/project-one/interior-concept/INTERIOR";
const exteriorViewPath =
  "/src/assets/images/project-one/exterior-concept/EXTERIOR";

// TODO: Refactor to use a loop to import images

// SITE VIEW
import site1 from "/src/assets/images/project-one/site-view/SITE-1.webp";
import site2 from "/src/assets/images/project-one/site-view/SITE-2.webp";
import site3 from "/src/assets/images/project-one/site-view/SITE-3.webp";
import site4 from "/src/assets/images/project-one/site-view/SITE-4.webp";

// INTERIOR VIEW
import in1 from "/src/assets/images/project-one/interior-concept/INTERIOR-1.webp";
import in2 from "/src/assets/images/project-one/interior-concept/INTERIOR-2.webp";
import in3 from "/src/assets/images/project-one/interior-concept/INTERIOR-3.webp";
import in4 from "/src/assets/images/project-one/interior-concept/INTERIOR-4.webp";

// EXTERIOR VIEW
import ex1 from "/src/assets/images/project-one/exterior-concept/EXTERIOR-1.webp";
import ex2 from "/src/assets/images/project-one/exterior-concept/EXTERIOR-2.webp";

// console.log(
//   import(`@/assets/images/project-one/exterior-concept/EXTERIOR-1.jpg`).src
// );

// const image = import(`../assets/images/people/INTERIOR${}.jpg`);

// const img = import(
//   `@/assets/images/project-one/exterior-concept/EXTERIOR-1.jpg`
// );

// console.log(img);

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
          <Accordion.Root
            className="AccordionRoot"
            type="multiple"
            collapsible="true"
          >
            <Accordion.Item className="AccordionItem" value="item-1">
              <AccordionTrigger>Site View Images</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col md:flex-row flex-wrap">
                  <div className="flex-1 basis-1/2">
                    <img src={site1.src} alt="Site View 1" className="w-full" />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img src={site2.src} alt="Site View 2" className="w-full" />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img src={site3.src} alt="Site View 3" className="w-full" />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img src={site4.src} alt="Site View 4" className="w-full" />
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
                      src={ex1.src}
                      alt="Exterior Concept 1"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img
                      src={ex2.src}
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
                      src={in1.src}
                      alt="Interior Concept 1"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img
                      src={in2.src}
                      alt="Interior Concept 2"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img
                      src={in3.src}
                      alt="Interior Concept 3"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1 basis-1/2">
                    <img
                      src={in4.src}
                      alt="Interior Concept 4"
                      className="w-full"
                    />
                  </div>
                </div>
              </AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-full rounded overflow-hidden">
            <model-viewer
              src="/models/compressed_SHED-REV-AA.glb"
              skybox-image="/models/spruit_sunrise_4k.jpg"
              skybox-height="0.06m"
              shadow-intensity="1"
              max-camera-orbit="auto 90deg auto"
              ar
              camera-controls
              disable-tap
              disable-pan
              ar-modes="webxr scene-viewer quick-look"
              tone-mapping="neutral"
              exposure="0.50"
              shadow-softness="1"
              environment-image="legacy"
              alt="A 3D model of a storage-unit-sized housing prototype"
              style={{ width: "100%", height: "300px" }}
            >
              <div className="progress-bar hide" slot="progress-bar">
                <div className="update-bar"></div>
              </div>
            </model-viewer>
          </div>
        </div>
        <div className="italic text-center pt-4">
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
