import React, { ReactElement } from "react";
import PaymentPage from "../../../../components/Payment/PaymentPage";
import Footer from "../../../../layouts/Footer/Footer";
import Nav from "../../../../layouts/Nav/Nav";
import { NextPageWithLayout } from "../../../_app";

const Payment: NextPageWithLayout = () => {
  return <PaymentPage />;
};

Payment.getLayout = function getLayout(page: ReactElement) {
  return (
    <Nav>
      <Footer>{page}</Footer>
    </Nav>
  );
};

export default Payment;
