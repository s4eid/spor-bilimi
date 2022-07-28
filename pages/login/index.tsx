import React from "react";
import LoginPage from "../../components/Login/LoginPage";
import { GetStaticProps, GetServerSideProps } from "next";

const Login = () => {
  return <LoginPage />;
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.req.cookies.account) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
export default Login;
