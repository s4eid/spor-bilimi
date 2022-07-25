import React, { ReactElement } from "react";
import Footer from "../../../layouts/Footer/Footer";
import Nav from "../../../layouts/Nav/Nav";
import { NextPageWithLayout } from "../../_app";
import { GET_BLOGS } from "../../../graphql/blog/query/getBlogs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { GET_BLOG } from "../../../graphql/blog/query/getBlog";
import { Blog as BlogT } from "../../../components/Blog/interfaces/blog.interfaces";
import BlogPage from "../../../components/Blog/BlogPage";
import { initializeApollo } from "../../../apolloConfig/apollo.config";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const Blog: NextPageWithLayout = ({
  blog,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const blog_id = router.query.blog;
  const { data, loading } = useQuery(GET_BLOG, {
    variables: { slug: blog_id },
    context: { clientName: "endpoint2" },
  });
  return <>{!loading ? <BlogPage blogC={data.post} /> : <p>loading</p>}</>;
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo();
  const data = await client.query({
    query: GET_BLOGS,
    context: { clientName: "endpoint2" },
    variables: { searchValue: "" },
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
  const client = initializeApollo();
  await client.query({
    query: GET_BLOG,
    variables: {
      slug: blog_id,
    },
    context: { clientName: "endpoint2" },
  });
  return {
    props: {
      // blog: blog.data.post,
      initialApolloState: client.cache.extract(),
    },
    //     revalidate: 10,
  };
};

export default Blog;
