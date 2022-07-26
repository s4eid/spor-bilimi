import React, { ReactElement } from "react";
// import Footer from "../../layouts/Footer/Footer";
// import type { NextPageWithLayout } from "../_app";
// import ProgramsPage from "../../components/Programs/ProgramsPage";
// import Nav from "../../layouts/Nav/Nav";
// import { useQuery } from "@apollo/client";
// import { GET_COURSES } from "../../graphql/courses/query/getCourses";
// import { initializeApollo } from "../../apolloConfig/apollo.config";
// import { GetStaticProps } from "next";
// const Programs: NextPageWithLayout = () => {
//   const { data, loading } = useQuery(GET_COURSES);
//   console.log(data.courses);
//   return (
//     <>{!loading ? <ProgramsPage courses={data.courses} /> : <>loading</>}</>
//   );
// };

// Programs.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Nav>
//       <Footer>{page}</Footer>
//     </Nav>
//   );
// };
// export default Programs;

// export const getStaticProps: GetStaticProps = async () => {
//   const client = initializeApollo();
//   await client.query({
//     query: GET_COURSES,
//   });
//   return {
//     props: {
//       initialApolloState: client.cache.extract(),
//     },
//     revalidate: 100,
//   };
// };
