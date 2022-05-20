import { useSelector } from "react-redux";
import { UserCard } from "components/surfaces/UserCard/UserCard";

export const UsersListPage = () => {
  const users = useSelector((state) => state.users.usersEntities);
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </>
  );
};
