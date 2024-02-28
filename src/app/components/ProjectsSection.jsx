"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI Bot Exploration Project",
    description: "In this unique exploration, I venture into an unconventional gridworld characterized by a square grid of dimensions dim * dim. Each cell within this grid may be obstructed with a likelihood of 0.3, making navigation a challenge. The navigable cells are varied, potentially featuring flat, hilly, or forest terrains, differentiated within my model as 1 (blocked), 2 (flat terrain), 5 (hilly terrain), and 8 (forest terrain) in a NumPy array representation.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deep-1997-08/AI-Exploration-Project",
    previewUrl: "https://github.com/Deep-1997-08/AI-Exploration-Project",
  },
  {
    id: 2,
    title: "Anomaly Based Intrusion Detection System",
    description: "The Intrusion Detection Framework Using the UNSW_NB15 Dataset project utilizes the UNSW_NB15 dataset to distinguish between normal and malicious network traffic. It employs a Spark ML Pipeline that transforms data, assembles features, and applies a Random Forest Classifier configured with 150 trees and a maximum depth of 15. The model achieves a 97.286% accuracy rate, demonstrating high efficacy in detecting network anomalies through a mix of categorical and numerical features.",
    image: "/images/projects/2.png",
    tag: [ "All","Web"],
    gitUrl: "https://github.com/Deep-1997-08/Anomaly-Based-Intrusion-Detection-System",
    previewUrl: "https://github.com/Deep-1997-08/Anomaly-Based-Intrusion-Detection-System",
  },
  {
    id: 3,
    title: "Image To Image Translation",
    description: "During this phase, I explored the complex task of paired image translation, which necessitates specialized models for each unique translation challenge. By implementing the Pix2Pix GAN, I tailored the loss function to combine L1 Distance and Adversarial Loss, alongside innovations in the Generator and Discriminator designs. This enabled the generation of images that were not only authentic to the content of the target domain but also accurately translated from the source imagery. Our replication of the Pix2Pix model yielded metrics-aligned results, with qualitative assessments matching the quantitative FID and IS scores. Observations indicated a decrease in FID and an increase in IS with more training epochs. Prospective studies could look into training unpaired networks with smaller batch sizes and investigating learning schedules to optimize runtime.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deep-1997-08/image_to_image_translation",
    previewUrl: "https://github.com/Deep-1997-08/image_to_image_translation",
  },
  {
    id: 4,
    title: "Advanced Wikipedia Article Summarizer and Recommender",
    description: "InfoSeeker incorporates a hybrid approach to summarization, combining extractive and abstractive methods. By integrating LDA, NMF, and BART models, the project generates summaries that are not only precise but also maintain the natural flow of language, significantly enhancing user comprehension and engagement.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Deep-1997-08/Advanced_Wikipedia_Article_Summarizer_and_Recommender",
    previewUrl: "https://github.com/Deep-1997-08/Advanced_Wikipedia_Article_Summarizer_and_Recommender",
  },
  {
    id: 5,
    title: "Transfer Learning",
    description: "I delved into the realm of image recognition through TensorFlow and TensorFlow Hub, demonstrating my expertise in classifying images with pre-trained models and further fine-tuning them for superior accuracy on specialized datasets. I skillfully prepared images for analysis, capitalized on the strengths of pre-trained models for broad image classification, and meticulously fine-tuned these models to excel in recognizing specific nuances. This endeavor highlights my ability to harness advanced machine learning techniques to not just meet but exceed the demands of sophisticated image recognition tasks.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "\https://github.com/Deep-1997-08/Deep_Learning/tree/main/Transfer_Learning",
    previewUrl: "\https://github.com/Deep-1997-08/Deep_Learning/tree/main/Transfer_Learning",
  },
  {
    id: 6,
    title: "Spam Detection with TensorFlow and BERT",
    description: "This project aims to accurately classify text messages as spam or ham (non-spam) using advanced Natural Language Processing (NLP) techniques. By leveraging TensorFlow, TensorFlow Hub, and the BERT (Bidirectional Encoder Representations from Transformers) model, we developed a sophisticated deep learning model that understands the nuances of textual data, enabling precise spam detection.",
    image: "/images/projects/6.png",
    tag: ["All",  "Web"],
    gitUrl: "https://github.com/Deep-1997-08/Deep_Learning/tree/main/Spam_Detection_with_TensorFlow_and_BERT",
    previewUrl: "https://github.com/Deep-1997-08/Deep_Learning/tree/main/Spam_Detection_with_TensorFlow_and_BERT",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Deep Learning"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NLP"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
