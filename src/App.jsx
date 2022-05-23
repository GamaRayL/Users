import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchUsersData } from "./store/users/reducer";
import { fetchPostsData } from "./store/posts/reducer";
import { fetchCommentsData } from "./store/comments/reducer";
import { Layout } from "./components/Layout/Layout";
import { UsersListPage, UserPage, PostPage } from "./pages";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
    dispatch(fetchPostsData());
    dispatch(fetchCommentsData());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UsersListPage />} />
          <Route path="userpage/:id" element={<UserPage />} />
          <Route path="userpost/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
