import React, { ReactElement } from "react";
import BlogsPage from "../../components/Blogs/BlogsPage";
import Footer from "../../layouts/Footer/Footer";
import Nav from "../../layouts/Nav/Nav";
import { NextPageWithLayout } from "../_app";
import { GET_BLOGS } from "../../graphql/blog/query/getBlogs";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { initializeApollo } from "../../apolloConfig/apollo.config";
import { useQuery } from "@apollo/client";
import { GET_BLOG } from "../../graphql/blog/query/getBlog";

const Blogs: NextPageWithLayout = ({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data, loading, fetchMore } = useQuery(GET_BLOGS, {
    context: { clientName: "endpoint2" },
    variables: { searchValue: "" },
  });
  console.log(data);
  return (
    <>
      {!loading ? (
        <BlogsPage blogsC={data.posts} fetchMore={fetchMore} />
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

Blogs.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();
  await client.query({
    query: GET_BLOGS,
    variables: { searchValue: "" },
    context: { clientName: "endpoint2" },
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    // revalidate: 100,
  };
};

export default Blogs;
