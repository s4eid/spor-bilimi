import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import PaymentPage from "../../../../components/Payment/PaymentPage";
import { GET_COURSE_PAY } from "../../../../graphql/courses/query/getOneCourse";
import Footer from "../../../../layouts/Footer/Footer";
import Nav from "../../../../layouts/Nav/Nav";
import { useSelector } from "react-redux";
import { NextPageWithLayout } from "../../../_app";
import { State } from "../../../../Redux/Reducers/rootReducer";

const Payment: NextPageWithLayout = () => {
  const router = useRouter();
  const user = useSelector((s: State) => s.user);
  const programId = router.query.program;
  const { data, loading } = useQuery(GET_COURSE_PAY, {
    variables: { id: programId },
    skip: programId == undefined,
  });
  return (
    <>
      {!loading && programId !== undefined ? (
        <PaymentPage course={data} />
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

export default Payment;
