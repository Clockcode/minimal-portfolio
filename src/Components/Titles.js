import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
`;

const Titles = ({ titles }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!titles) {
      console.log("no")
      return;
    }
    const intervalId = setInterval(() => {
      setIndex(i => (i + 1) % titles.length);
    }, 500);
    return () => clearInterval(intervalId);
  }, [titles]);
  return (
    <div style={{ opacity: index === 0 ? 1 : 0 }}>
      <Title style={{ opacity: index === 0 ? 1 : 0 }}>
        {titles && titles[index]}
      </Title>
    </div>
  );
};

export default Titles;
