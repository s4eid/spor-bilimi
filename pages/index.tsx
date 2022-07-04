import Nav from "../layouts/Nav/Nav";
import type { ReactElement } from "react";

// import NestedLayout from "../components/nested-layout";
import Footer from "../layouts/Footer/Footer";
import type { NextPageWithLayout } from "./_app";
import HomePage from "../components/Home/HomePage";

const Home: NextPageWithLayout = () => {
  return <HomePage />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};

export default Home;
