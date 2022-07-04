import React, { ReactElement } from "react";
import ProgramPage from "../../../components/Program/ProgramPage";
import Footer from "../../../layouts/Footer/Footer";
import Nav from "../../../layouts/Nav/Nav";
import { NextPageWithLayout } from "../../_app";

const Program: NextPageWithLayout = () => {
  return <ProgramPage />;
};

Program.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};

export default Program;
