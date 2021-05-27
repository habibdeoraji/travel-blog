import React from "react";
import "./mainContainer.css";
import { BlogData } from "../../commonData.jsx";
import BlogCard from "../BlogCard/index";

const MainContainer = () => {
  return (
    <div className="main-container">
      {BlogData.map(({ title, imageUrl, id, description }) => (
        <BlogCard
          title={title}
          imageUrl={imageUrl}
          description={description}
          key={id}
        />
      ))}
    </div>
  );
};

export default MainContainer;
