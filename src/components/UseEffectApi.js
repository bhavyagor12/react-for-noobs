import React, { useState, useEffect } from "react";
import GithubUsers from "./GithubUsers";
const UseEffectApi = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");

      setUsers(await response.json());
    } catch (error) {
      console.log("my error is " + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <GithubUsers users={users} />
    </>
  );
};

export default UseEffectApi;
