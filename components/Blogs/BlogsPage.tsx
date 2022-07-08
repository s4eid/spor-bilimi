import React, { useState } from "react";
import blogs from "./blogs.module.scss";
import { articleItems_1 } from "../../data/articles.data";
import Blog from "./Blog/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilter } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Filter from "./Filter/Filter";

const BlogsPage = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  return (
    <div className={blogs.mainContainer}>
      <div className={blogs.mainC}>
        <div className={blogs.title} onClick={() => setFilterOpen(!filterOpen)}>
          <p>Filter</p>
          <FontAwesomeIcon icon={faFilter} />
        </div>
        <Search />
      </div>
      {filterOpen ? <Filter /> : <></>}
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
        <div className={blogs.paginationC}>
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
