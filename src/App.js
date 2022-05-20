import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersData } from "./store/users/";
import { PostPage, UserPage, UsersListPage } from "./pages/";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData);
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div className="App">
        <PostPage />
        <UserPage />
        <UsersListPage />
      </div>
    </Provider>
  );
}

export default App;
