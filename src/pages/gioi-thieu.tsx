import React from "react";
import dynamic from "next/dynamic";

const Page: any = dynamic(() => import("src/container/GioiThieu/GioiThieu"), { ssr: true });

export default function Index() {
  return <Page />;
}
