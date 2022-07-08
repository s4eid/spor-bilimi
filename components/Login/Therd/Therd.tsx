import React from "react";
import therd from "./therd.module.scss";
const Therd = () => {
  return (
    <div className={therd.googleBtn}>
      <div className={therd.googleIconWrapper}>
        <img
          className={therd.googleIcon}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <p className={therd.btnText}>
        <b>Sign in with google</b>
      </p>
    </div>
  );
};

export default Therd;
