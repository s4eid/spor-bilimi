import React, { ReactElement } from "react";
import Footer from "../../layouts/Footer/Footer";
import type { NextPageWithLayout } from "../_app";
import ProgramsPage from "../../components/Programs/ProgramsPage";
import Nav from "../../layouts/Nav/Nav";

const Programs: NextPageWithLayout = () => {
  return <ProgramsPage />;
};

Programs.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};
export default Programs;
