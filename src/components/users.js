import { useEffect, useState } from "react";
import Testimony from "./Testimony";
const Users = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await fetch("https://reqres.in/api/users?page=2");
    const users = await data.json();
    setList(users.data);
  };
  return list.map((item) => (
    <Testimony
      name={item.first_name}
      city={item.last_name}
      // job={item.company.bs}
      // company={item.company.name}
      // number={item.phone}
      email={item.email}
      image={item.avatar}
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
