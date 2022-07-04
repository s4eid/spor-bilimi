import React from "react";
import blogs from "./blogs.module.scss";
import { articleItems_1 } from "../../data/articles.data";
import Blog from "./Blog/Blog";
import Filter from "./Filter/Filter";

const BlogsPage = () => {
  return (
    <div className={blogs.mainContainer}>
      <div className={blogs.mainC}>
        <div className={blogs.title}>
          <h2>Blogs</h2>
        </div>
        <Filter />
      </div>
      <div className={blogs.blogsC}>
        {articleItems_1.map((a, index) => (
          <div className={blogs.blogHolder} key={index}>
            <Blog
              title={a.title}
              date={a.date}
              name={a.name}
              img={a.img}
              link={a.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
