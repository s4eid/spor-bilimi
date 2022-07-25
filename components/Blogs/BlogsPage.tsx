import React, { useState } from "react";
import blogs from "./blogs.module.scss";
import Blog from "./Blog/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search/Search";
import Pagination from "@mui/material/Pagination";
import Filter from "./Filter/Filter";
import { Blog as BlogT } from "./interfaces/blogs.interfaces";

interface Props {
  blogsC: BlogT[];
  fetchMore: any;
}

const BlogsPage = ({ blogsC, fetchMore }: Props) => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const changeBlogs = (text: string) => {
    fetchMore({
      variables: { searchValue: text },
      updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
        console.log(fetchMoreResult.posts);
        fetchMoreResult.posts = [...fetchMoreResult.posts];
        return fetchMoreResult;
      },
    });
  };
  // const []=useQuery(GET_BLOGS_SEARCH,{variables:{searchValue:search}});
  return (
    <div className={blogs.mainContainer}>
      <div className={blogs.mainC}>
        <div className={blogs.title} onClick={() => setFilterOpen(!filterOpen)}>
          <p>Filter</p>
          <FontAwesomeIcon icon={faFilter} />
        </div>
        <Search changeBlog={changeBlogs} />
      </div>
      {filterOpen ? <Filter /> : <></>}
      <div className={blogs.blogsC}>
        {blogsC?.map((a, index) => (
          <div className={blogs.blogHolder} key={index}>
            <Blog
              title={a?.content?.raw?.children[0].children[0].text.substring(
                0,
                70
              )}
              date={a?.createdAt}
              name={a?.title}
              img={a?.coverPhoto?.url}
              link={a?.slug}
              author_name={a?.author?.name}
              author_avatar={a?.author?.avatar?.url}
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
