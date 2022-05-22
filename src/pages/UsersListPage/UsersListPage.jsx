import UserCard from "../../components/surfaces/UserCard/UserCard";
import { useSelector } from "react-redux";

export const UsersListPage = () => {
  const users = useSelector((state) => state.users.usersEntities);
  const posts = useSelector((state) => state.posts.postsEntities);
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} posts={posts} />
      ))}
    </>
  );
};
