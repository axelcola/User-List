import UserList from "./userList";
import GetUser from "./getUsers";
import Spinner from "./Spinner";

const Users = () => {
  const { loading } = GetUser();

  return <>{loading ? <Spinner className="spinner" /> : <UserList />}</>;
};

export default Users;
