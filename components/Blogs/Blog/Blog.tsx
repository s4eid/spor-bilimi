import Image from "next/image";
import React from "react";
import blog from "./blog.module.scss";

interface Props {
  title: string;
  name: string;
  date: string;
  img: string;
  link: string;
}

const Blog = ({ link, title, name, date, img }: Props) => {
  return (
    <>
      <div className={blog.date}>
        <p>{date}</p>
      </div>
      <div className={blog.authorC}>
        <div className={blog.profile}>
          <Image src="/person.jpg" layout="fill" />
        </div>
        <div className={blog.author}>Saeid N</div>
      </div>
      <div className={blog.imageC}>
        <Image src={img} layout="fill" />
      </div>
      <div className={blog.contentC}>
        <h2>{name}</h2>
        <p>{title}</p>
        <button>Read</button>
      </div>
    </>
  );
};

export default Blog;
