import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import PostCard from "components/Surfaces/PostCard";
import CommentCard from "components/Surfaces/CommentCard";
import Form from "components/Inputs/Form";

export const PostPage = () => {
  const [displayForm, setDisplayForm] = useState("none");
  const { id } = useParams();

  const comments = useSelector(
    (state) => state.comments.commentsEntities
  ).filter((comment) => comment.postId === Number(id));

  const posts = useSelector((state) => state.posts.postsEntities).filter(
    (post) => post.id === Number(id)
  );

  const showForm = () => {
    displayForm === "none" ? setDisplayForm("block") : setDisplayForm("none");
  };

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <Typography sx={{ fontSize: 34 }}>Комментарии</Typography>
      <Box>
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </Box>
      <Button
        onClick={() => showForm()}
        sx={{
          ":hover": {
            bgcolor: "white",
            color: "black",
          },
          width: 375,
          borderRadius: 0,
          mt: 4,
          mb: 1,
          backgroundColor: "black",
          color: "white",
        }}
        variant="contained"
        color="inherit"
      >
        добавить комментарий
      </Button>
      <div style={{ display: displayForm }}>
        <Form />
      </div>
    </>
  );
};
