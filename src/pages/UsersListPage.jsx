import { useSelector } from "react-redux";
import UserListCard from "components/Surfaces/UserListCard";

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
