"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>R</li>
        <li>Tableu</li>
        <li>Power BI</li>
        <li>JavaScript</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Pandas</li>
        <li>Numpy</li>
        <li>Tensorflow</li>
        <li>Tensor serving</li>
        <li>BERT</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master&apos;s in Engineering Management (Northeastern University)</li>
        <li>Bachelor's in Electronics and Tellecommunication (VESIT)</li>
      </ul>
    ),
  },
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
             I'm a Data Scientist with a Master's 
            in Engineering Management from Northeastern University, 
            specializing in Machine Learning and Data Science. With
            proficiency in Python, R, and various ML techniques, I've led 
            significant projects at Capgemini and Delphi Steel, achieving 
            milestones like a 5x reduction in computational costs and a 
            35% boost in workforce productivity. My work focuses on 
            translating complex data challenges into scalable, efficient 
            solutions, leveraging advanced analytics, and cloud technologies 
            to drive business value and operational improvements.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Packages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
