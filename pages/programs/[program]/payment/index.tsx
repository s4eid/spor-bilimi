import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import PaymentPage from "../../../../components/Payment/PaymentPage";
import { GET_COURSE_PAY } from "../../../../graphql/courses/query/getOneCourse";
import Footer from "../../../../layouts/Footer/Footer";
import Nav from "../../../../layouts/Nav/Nav";

import { NextPageWithLayout } from "../../../_app";
// import {
//   Course,
//   Data,
// } from "../../../../components/Payment/interface/payment.interface";

// interface Var {
//   id: string | string[] | undefined;
// }

const Payment: NextPageWithLayout = () => {
  const router = useRouter();
  const programId = router.query.program;
  const { data, loading } = useQuery(GET_COURSE_PAY, {
    variables: { id: programId },
    skip: programId == undefined,
  });

  console.log(data);
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
