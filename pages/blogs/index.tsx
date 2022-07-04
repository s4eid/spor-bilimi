import React, { ReactElement } from "react";
import BlogsPage from "../../components/Blogs/BlogsPage";
import Footer from "../../layouts/Footer/Footer";
import Nav from "../../layouts/Nav/Nav";
import { NextPageWithLayout } from "../_app";

const Blogs: NextPageWithLayout = () => {
  return <BlogsPage />;
};

Blogs.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};

export default Blogs;
