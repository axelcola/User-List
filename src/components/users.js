import { useEffect, useState } from "react";
import Testimony from "./Testimony";
const pito = "pito";
const Users = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await fetch("https://randomuser.me/api/?gender=female");
    const users = await data.json();
    setList(users);
  };
  return list.map((item) => (
    <Testimony
      name={item.name}
      city={item.address.city}
      job={item.company.bs}
      company={item.company.name}
      number={item.phone}
      email={item.email}
      image={`https://randomuser.me/api/portraits/men/${item.id}.jpg`}
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
