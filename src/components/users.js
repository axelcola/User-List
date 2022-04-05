import { useEffect, useState } from "react";
import Testimony from "./Testimony";
const Users = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await fetch("https://reqres.in/api/users?page=2");
    const data = await fetch("https://randomuser.me/api/?results=5000");
    const users = await data.json();
    setList(users.results);
  };
  return list.map((item) => (
    <Testimony
      image={item.picture.large}
      title={item.name.title}
      first={item.name.title}
      last={item.name.last}
      city={item.location.city}
      state={item.location.state}
      date={item.dob.date}
      age={item.dob.age}
      email={item.email}
      phone={item.cell}
    />
  ));
};

export default Users;

/* <Testimony
  name={item.name} */

// city={item.address.city}
// userName={item.login.username}
// company={item.company.name}
// email={item.email}
// image={item.picture.medium}
// />;
