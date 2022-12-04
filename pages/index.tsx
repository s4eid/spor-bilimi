import Nav from "../layouts/Nav/Nav";
import type { ReactElement } from "react";
import Footer from "../layouts/Footer/Footer";
import type { NextPageWithLayout } from "./_app";
import HomePage from "../components/Home/HomePage";
// import { GetStaticProps } from "next";
// import { initializeApollo } from "../apolloConfig/apollo.config";
// import { GET_COURSES } from "../graphql/courses/query/getCourses";
// import { useQuery } from "@apollo/client";

const Home: NextPageWithLayout = () => {
  // const { data, loading } = useQuery(GET_COURSES);
  const courses = [
    {
      course_id: "1b4f3136-55e6-4b7e-aca6-8e2b73cd72d1",
      image:
        "https://res.cloudinary.com/nuzem/image/upload/v1657628659/sb/workoutProgram_xqdjmr.jpg",
      name: "Movie Star Body Masterclass",
      title:
        "The most complete Masterclass for slicing off fat, gaining perfect muscle size & getting into Movie Star shape.​",
      __typename: "Course",
    },
  ];
  return <HomePage courses={courses} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const client = initializeApollo();
//   await client.query({
//     query: GET_COURSES,
//   });
//   return {
//     props: {
//       initialApolloState: client.cache.extract(),
//     },
//     // revalidate: 100,
//   };
// };

export default Home;
