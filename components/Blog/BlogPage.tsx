import React from "react";
import { Blog } from "./interfaces/blog.interfaces";
import blog from "./blogPage.module.scss";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import moment from "moment";
import Chip from "@mui/material/Chip";

interface Props {
  blogC: Blog;
}

const BlogPage = ({ blogC }: Props) => {
  return (
    <div className={blog.mainC}>
      <div className={blog.details}>
        <div className={blog.author}>
          <Avatar alt={blogC.author.name} src={blogC.author.avatar.url} />
          <p>{blogC.author.name}</p>
        </div>
        <p className={blog.date}>
          {moment(blogC.createdAt).format("MMMM D YYYY")}
        </p>
      </div>
      <div className={blog.categoryC}>
        <Chip size="medium" label={blogC.category} color="primary" />
      </div>
      <div className={blog.title}>
        <h2>{blogC.title}</h2>
      </div>
      <div className={blog.headerC}>
        <Image src={blogC.coverPhoto.url} layout="fill" />
      </div>
      <div
        className={blog.content}
        dangerouslySetInnerHTML={{ __html: blogC.content.html }}
      ></div>
    </div>
  );
};

export default BlogPage;
