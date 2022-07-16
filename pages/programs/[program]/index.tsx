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

const Program: NextPageWithLayout = () => {
  const user: UserP = useSelector((result: State) => result.user);
  const router = useRouter();
  const route = router.query.program;
  const { data, loading } = useQuery(GET_COURSE, {
    variables: { id: route },
  });
  console.log(data);
  return (
    <>{!loading ? <ProgramPage course={data.course} /> : <p>loading</p>}</>
  );
};

Program.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};

export default Program;
