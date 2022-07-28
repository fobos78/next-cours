import React from "react";
import A from "../components/A";
import Head from "next/head";

export default function Navbar({ children, keywords }) {
  return (
    <>
    <Head>
        <meta keywords={"главная, " + keywords}></meta>
        <title>NextJS</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
      </div>
      <div>
       {children}
      </div>
      <style>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
          
        `}
      </style>
    </>
  );
}
