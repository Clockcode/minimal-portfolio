import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/home.css'
import ProjectCard from "../Components/ProjectCard";
import { motion } from 'framer-motion';
import styled from "styled-components";
import Titles from "../Components/Titles";

let viralNationProject = {
  title: "Viral Nation",
  desc: "I started as a junior UI/UX designer then promoted to lead designer thanks to my skills in understanding the business requirements as well as being fast at solving problems.",
  logo: "src/Assets/Images/VN_logo.png",
  link: "/Projects/ViralNationProject",
};

const titles = ["Problem solver.", "Design advocate.", "Lifelong learner.", "Customer centric."]

const Body = styled.div`
  margin: 2rem 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function Home() {

  return (
    <Body>
        <div className="titles">
          <Titles titles={titles} />
        </div>

      <div className="projects">
        <ProjectCard projectDetails={viralNationProject}></ProjectCard>
      </div>
    </Body>
  );
}
