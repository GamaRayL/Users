import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import PostListCard from "components/Surfaces/PostListCard";
import UserCard from "components/Surfaces/UserCard";

export const UserPage = () => {
  const [elementInArray, setElementInArray] = useState(3);
  const { id } = useParams();
  const user = useSelector((state) => state.users.usersEntities).filter(
    (user) => user.id === Number(id)
  );
  const post = useSelector((state) => state.posts.postsEntities).filter(
    (post) => post.userId === Number(id)
  );

  const increaseQuantityInArray = () => {
    elementInArray === 3 ? setElementInArray() : setElementInArray(3);
  };

  return (
    <>
      {user.map((user) => (
        <UserCard key={user.id} user={user}></UserCard>
      ))}
      <Typography sx={{ fontSize: 34, ml: 2 }}>Посты</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {post.slice(0, elementInArray).map((post) => (
          <PostListCard key={post.id} post={post} />
        ))}
      </Box>
      <Button
        sx={{
          ":hover": {
            bgcolor: "white",
            color: "black",
          },
          borderRadius: 0,
          m: 0.5,
          backgroundColor: "black",
          color: "white",
          alignSelf: "center",
        }}
        variant="contained"
        color="inherit"
        onClick={() => increaseQuantityInArray()}
      >
        {elementInArray === 3 ? "посмотреть все" : "скрыть"}
      </Button>
    </>
  );
};
