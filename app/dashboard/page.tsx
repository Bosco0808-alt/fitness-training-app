"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, []);
  return <h1>test</h1>;
};

export default dashboard;
