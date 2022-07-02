import Image from "next/image";
import React from "react";
import article from "./article.module.scss";

type ArticleType = {
  name: string;
  link: string;
  id: number;
  date: string;
  //   key: number;
  img: string;
  title: string;
};
type Props = {
  a: ArticleType;
  key: number;
};

const Article = ({ a }: Props) => {
  return (
    <div className={article.holderC}>
      <div className={article.articleC}>
        <div className={article.imgC}>
          <Image src={a.img} layout="fill" width={200} height={160} />
        </div>

        <div className={article.textC}>
          <div className={article.nameC}>
            <p>{a.name}</p>
            <p className={article.date}>{a.date}</p>
          </div>
          <div className={article.titleC}>
            <p>{a.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
