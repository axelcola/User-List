import UserCard from "./UserCard";
import GetUser from "./getUsers";

const UserList = () => {
  const { list } = GetUser();

  return list.map((item) => (
    <UserCard
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

export default UserList;
