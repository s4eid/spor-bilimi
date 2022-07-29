import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import PaymentPage from "../../../../components/Payment/PaymentPage";
import { GET_COURSE_PAY } from "../../../../graphql/courses/query/getOneCourse";
import Footer from "../../../../layouts/Footer/Footer";
import Nav from "../../../../layouts/Nav/Nav";
import { useSelector } from "react-redux";
import { NextPageWithLayout } from "../../../_app";
import { State } from "../../../../Redux/Reducers/rootReducer";
import { GetServerSideProps } from "next";
import { Quiz } from "../../../../Redux/Interfaces/Quiz";
import { User } from "../../../../Redux/Interfaces/User";

const Payment: NextPageWithLayout = () => {
  const router = useRouter();
  const programId = router.query.program;
  const { quiz, user }: { quiz: Quiz; user: User } = useSelector(
    (state: State) => state
  );
  console.log(user);
  useEffect(() => {
    if (!quiz.goal) {
      router.push(`/programs/${programId}/quiz`);
    }
  }, []);
  const metting =
    typeof window !== "undefined" && localStorage.getItem("metting");
  const _metting = JSON.parse(metting as string);
  const { data, loading } = useQuery(GET_COURSE_PAY, {
    variables: { id: programId },
    skip: programId == undefined,
  });
  return (
    <>
      {!loading && programId !== undefined ? (
        <PaymentPage quiz={quiz} user={user} course={data} metting={_metting} />
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

Payment.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.req.cookies.account) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Payment;
