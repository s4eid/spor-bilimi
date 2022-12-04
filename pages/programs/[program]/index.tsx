import { useQuery } from "@apollo/client";
import React, { ReactElement } from "react";
import ProgramPage from "../../../components/Program/ProgramPage";
import Footer from "../../../layouts/Footer/Footer";
import Nav from "../../../layouts/Nav/Nav";
import { NextPageWithLayout } from "../../_app";
import { GET_COURSE } from "../../../graphql/courses/query/getOneCourse";
import { useSelector } from "react-redux";
import { State } from "../../../Redux/Reducers/rootReducer";
import { UserP } from "../../../Redux/Interfaces/User";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { initializeApollo } from "../../../apolloConfig/apollo.config";
import { GET_COURSES } from "../../../graphql/courses/query/getCourses";
import { Course } from "../../../components/Programs/Interfaces/programs.interface";

const Program: NextPageWithLayout = () => {
  const user: UserP = useSelector((result: State) => result.user);
  const router = useRouter();
  const route = router.query.program;
  // const { data, loading } = useQuery(GET_COURSE, {
  //   variables: { id: route },
  // });
  return (
    // <>{!loading ? <ProgramPage course={data.course} /> : <p>loading</p>}</>
    <div>helo</div>
  );
};

Program.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};
// export const getStaticPaths: GetStaticPaths = async () => {
//   const client = initializeApollo();
//   const data = await client.query({
//     query: GET_COURSES,
//   });
//   const paths = data.data.courses.map((p: Course) => {
//     return {
//       params: { program: p.course_id },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const course_id = params?.program;
//   const client = initializeApollo();
//   await client.query({
//     query: GET_COURSE,
//     variables: {
//       id: course_id,
//     },
//   });
//   return {
//     props: {
//       initialApolloState: client.cache.extract(),
//     },
//     // revalidate: 100,
//   };
// };

export default Program;
