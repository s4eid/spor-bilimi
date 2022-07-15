import { GetServerSideProps } from "next";
import React from "react";
import RegisterPage from "../../components/Register/RegisterPage";

const Register = () => {
  return <RegisterPage />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.req.cookies.refresh_token) {
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

export default Register;
