import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";

export default function ({user}) {
  const { query } = useRouter();
//   const [user, setUser] = useState("");
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${query.id}`
//       );
//       const json = await response.json();
//       setUser(json);
//     }
//       fetchData();
//   }, [query.id]);

  return (
    <Navbar keywords={user.name}>
      <h1>
        Пользователь с id {query.id} имя {user.name}
      </h1>
    </Navbar>
  );
}

// export async function getStaticProps({params}) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
//     const user = await response.json();
//     return {
//       props: { user },
//     };
//   }
  export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
      props: { user },
    };
  }