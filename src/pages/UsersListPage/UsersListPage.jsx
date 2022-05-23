import UserListCard from "../../components/surfaces/UserListCard/UserListCard";
import { useSelector } from "react-redux";

export const UsersListPage = () => {
  const users = useSelector((state) => state.users.usersEntities);
  return (
    <>
      {users.map((user) => (
        <UserListCard key={user.id} user={user} />
      ))}
    </>
  );
};
