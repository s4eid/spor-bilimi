import React, { ReactElement } from "react";
import Footer from "../../../layouts/Footer/Footer";
import Nav from "../../../layouts/Nav/Nav";
import { NextPageWithLayout } from "../../_app";
import { blogApi } from "../../../apolloConfig/apolloClient";
import { GET_BLOGS } from "../../../graphql/blog/query/getBlogs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { GET_BLOG } from "../../../graphql/blog/query/getBlog";
import { Blog as BlogT } from "../../../components/Blog/interfaces/blog.interfaces";
import BlogPage from "../../../components/Blog/BlogPage";

const Blog: NextPageWithLayout = ({
  blog,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <BlogPage blogC={blog} />;
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await blogApi.query({
    query: GET_BLOGS,
  });
  const paths = data.data.posts.map((p: BlogT) => {
    return {
      params: { blog: p.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog_id = params?.blog;
  const blog = await blogApi.query({
    query: GET_BLOG,
    variables: { slug: blog_id },
  });
  return {
    props: {
      blog: blog.data.post,
    },
    //     revalidate: 10,
  };
};

export default Blog;
