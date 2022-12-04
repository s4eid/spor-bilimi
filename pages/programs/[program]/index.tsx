// import { useQuery } from "@apollo/client";
import React, { ReactElement } from "react";
import ProgramPage from "../../../components/Program/ProgramPage";
import Footer from "../../../layouts/Footer/Footer";
import Nav from "../../../layouts/Nav/Nav";
import { NextPageWithLayout } from "../../_app";
// import { GET_COURSE } from "../../../graphql/courses/query/getOneCourse";
import { useSelector } from "react-redux";
import { State } from "../../../Redux/Reducers/rootReducer";
import { UserP } from "../../../Redux/Interfaces/User";
// import { useRouter } from "next/router";
// import { GetStaticPaths, GetStaticProps } from "next";
// import { initializeApollo } from "../../../apolloConfig/apollo.config";
// import { GET_COURSES } from "../../../graphql/courses/query/getCourses";
// import { Course } from "../../../components/Programs/Interfaces/programs.interface";

const Program: NextPageWithLayout = () => {
  const user: UserP = useSelector((result: State) => result.user);
  // const router = useRouter();
  // const route = router.query.program;
  // const { data, loading } = useQuery(GET_COURSE, {
  //   variables: { id: route },
  // });
  // console.log(data);
  const course = {
    category: "fitness",
    details:
      "You see the power comes when you get into Movie Star Shape. When you have the perfect combination of razor sharp definition, muscle size, and proportion.",
    image:
      "https://res.cloudinary.com/nuzem/image/upload/v1657628659/sb/workoutProgram_xqdjmr.jpg",
    learn: [
      "Bodyweight training improves muscle activation.",
      "You Will Build Unbelievable Core Strength",
      "You Will Be Able to Train Anywhere & Anytime",
      "Training Will Turn Heads Faster Than Margot Robbie in a Bikini",
    ],
    name: "Movie Star Body Masterclass",
    plans: [
      { __typename: "Plan", price: 550.5, time: "6m" },

      { __typename: "Plan", price: 800, time: "1y" },

      { __typename: "Plan", price: 450, time: "1m" },
    ],
    title:
      "The most complete Masterclass for slicing off fat, gaining perfect muscle size & getting into Movie Star shape.​",
    trainer: {
      __typename: "Trainer",
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFBG-…eta&t=qDqdxL6gkRl_cQYaFBk11QIrQBJdKRFiYs2L3GHMVog",
      first_name: "saeid",
      last_name: "noormohammad",
    },
  };
  return <ProgramPage course={course} />;
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
