import { useState } from "react";
import { PostPage, UserPage, UsersListPage } from "./pages";

function App() {
  const [users, setUsers] = useState();
  const [posts, setPosts] = useState();

  async function getData() {
    const usersAPI = "https://jsonplaceholder.typicode.com/users";
    const postsAPI = "https://jsonplaceholder.typicode.com/posts";

    try {
      const usersResponse = await fetch(usersAPI);
      const usersData = await usersResponse.json();
      setUsers(usersData);

      const postsResponse = await fetch(postsAPI);
      const postsData = await postsResponse.json();
      setPosts(postsData);
    } catch (error) {}
  }
  getData();

  return (
    <div className="App">
      <PostPage users={users} posts={posts} />
      <UserPage users={users} posts={posts} />
      <UsersListPage users={users} posts={posts} />
    </div>
  );
}

export default App;
