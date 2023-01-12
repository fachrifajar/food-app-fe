import React from "react";
import Helmet from "react-helmet";

function Maintenance() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <Helmet>
          <title>MAINTENANCE</title>
        </Helmet>
        <img
          src="/images/maintenance.svg"
          alt="Under Maintenance"
          width="60%"
        />
      </div>
      <h1
        className="text-center mt-3"
        style={{ fontWeight: "700", fontSize: "40px" }}>
        Sorry, we're doing some work on this page
      </h1>
      <span>
        <p className="text-center mt-3">
          Thank you for being patient. We are doing some work on the site and
          will be back shortly.
        </p>
      </span>
    </div>
  );
}

export default Maintenance;
