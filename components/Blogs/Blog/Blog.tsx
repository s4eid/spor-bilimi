import Image from "next/image";
import React from "react";
import blog from "./blog.module.scss";
import { useRouter } from "next/router";
import moment from "moment";

interface Props {
  title: string;
  name: string;
  date: string;
  img: string;
  link: string;
  author_name: string;
  author_avatar: string;
}

const Blog = ({
  link,
  title,
  name,
  date,
  img,
  author_name,
  author_avatar,
}: Props) => {
  const router = useRouter();
  return (
    <>
      <div className={blog.date}>
        <p>{moment(date).format("MMMM D YYYY")}</p>
      </div>
      <div className={blog.authorC}>
        <div className={blog.profile}>
          <Image src={author_avatar} layout="fill" />
        </div>
        <div className={blog.author}>{author_name}</div>
      </div>
      <div className={blog.imageC}>
        <Image src={img} layout="fill" />
      </div>
      <div className={blog.contentC}>
        <h2>{name}</h2>
        <p>{title}</p>
        <button onClick={() => router.push(`/blogs/${link}`)}>Read</button>
      </div>
    </>
  );
};

export default Blog;
