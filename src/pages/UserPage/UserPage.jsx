// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const UserPage = () => {
  // const users = useSelector((state) => state.users.usersEntities);
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return <div>{<h1>{user.name}</h1>}</div>;
};
