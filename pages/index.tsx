import Nav from "../layouts/Nav/Nav";
import type { ReactElement } from "react";
import Footer from "../layouts/Footer/Footer";
import type { NextPageWithLayout } from "./_app";
import HomePage from "../components/Home/HomePage";
import { GetStaticProps } from "next";
import { initializeApollo } from "../apolloConfig/apollo.config";
import { GET_COURSES } from "../graphql/courses/query/getCourses";
import { useQuery } from "@apollo/client";

const Home: NextPageWithLayout = () => {
  const { data, loading } = useQuery(GET_COURSES);
  return <>{!loading ? <HomePage courses={data.courses} /> : <p>loading</p>}</>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();
  console.log("l");
  await client.query({
    query: GET_COURSES,
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    // revalidate: 100,
  };
};

export default Home;
