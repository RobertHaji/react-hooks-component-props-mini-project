import React from "react";

const About = ({ Image = "https://via.placeholder.com/215", about }) => {
  return (
    <aside>
      <img src="{image}" alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About