import Link from "next/Link";
// import { useState, useEffect } from "react";
import A from "../components/A";
import styles from "../styles/User.module.scss";
import Navbar from "../components/navbar";

export default function Users({ users }) {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/users`
  //     );
  //     const json = await response.json();
  //     setUsers(json);
  //   }
  //   fetchData();
  // }, []);

  return (
    <Navbar keywords={'users'}>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className={styles.user}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      
    </Navbar>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  return {
    props: { users },
  };
}
