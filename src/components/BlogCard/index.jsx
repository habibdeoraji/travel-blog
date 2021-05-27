import React from "react";
import "./blogCard.css";

const BlogCard = ({ imageUrl, title, description }) => {
  return (
    <div className="blog-card">
      <img src={imageUrl} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;
