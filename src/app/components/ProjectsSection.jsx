"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: "Ecommerce website include features like authentication,order placing,Razorpay payment gateway,etc. Tech Stack -- React.js, MongoDB, Nodejs, MaterialUI, TailwindCSS, JSON Web Tokens, Redux, Cloudinary .",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aryamantandon18/Ecommerce",
    previewUrl: "https://aryaman-ecommerce.vercel.app/",
  },
  {
    id: 2,
    title: "Ecoyaan Website",
    description: "Complete responsive website. Tech Stack -- React.js, TailwindCSS, react-router-dom .",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aryamantandon18/EcoyaanAssignment",
    previewUrl: "https://ecoyaan-assignment.vercel.app/",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Tasking managing app including CRUD operations , user authentication. Tech Stack -- React.js,CSS,Nodejs,MongoDB",
    image: "/images/projects/download.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aryamantandon18/todo_react",
    previewUrl: "https://todo-react-omega-six.vercel.app/",
  },
  {
    id: 4,
    title: "Todo List",
    description: "Todo List including crud operations",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/aryamantandon18/TodoTypeScript",
    previewUrl: "https://todo-type-script-mu.vercel.app/",
  },
  {
    id: 5,
    title: "My Airbnb",
    description: "Tech Stacks : Nextjs, MongoDB, Redux, Prisma ORM (This project is currently in progress)",
    image: "/images/Airbnb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aryamantandon18/Airbnb",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
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
