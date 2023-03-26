import React from "react";
import Navbar from "./NavBar";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
  title: string;
};

const AppLayout = (props: Props) => {
  return (
    <div className="m-auto mb-10 max-w-7xl">
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />
      <h1 className="my-3 text-4xl font-bold text-center">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default AppLayout;
