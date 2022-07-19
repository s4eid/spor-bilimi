import React, { ReactElement } from "react";
import BlogsPage from "../../components/Blogs/BlogsPage";
import Footer from "../../layouts/Footer/Footer";
import Nav from "../../layouts/Nav/Nav";
import { NextPageWithLayout } from "../_app";
import { blogApi } from "../../apolloConfig/apolloClient";
import { GET_BLOGS } from "../../graphql/blog/query/getBlogs";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const Blogs: NextPageWithLayout = ({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(blogs);
  return <BlogsPage blogsC={blogs} />;
};

Blogs.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const blogs = await blogApi.query({
    query: GET_BLOGS,
  });
  return {
    props: {
      blogs: blogs.data.posts,
    },
    // revalidate: 100,
  };
};

export default Blogs;
