"use client";

import Link from "next/link";

const Error = () => {
  return (
    <>
      <h1>Oops! An error occured</h1>
      <Link className="btn btn-primary" href={"/"}>
        Back to home
      </Link>
    </>
  );
};

export default Error;
