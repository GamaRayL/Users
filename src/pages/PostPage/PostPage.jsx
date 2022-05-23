import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostCard from "../../components/surfaces/PostCard/PostCard";
import CommentCard from "../../components/surfaces/CommentCard/CommentCard";
import Form from "../../components/Inputs/Form";
import { Box, Typography } from "@mui/material";

export const PostPage = () => {
  const { id } = useParams();
  const comments = useSelector(
    (state) => state.comments.commentsEntities
  ).filter((comment) => comment.postId === Number(id));
  const posts = useSelector((state) => state.posts.postsEntities).filter(
    (post) => post.id === Number(id)
  );
  console.log(useSelector((state) => state.comments.commentsEntities));
  return (
    <>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
      <Typography sx={{ fontSize: 34 }}>Комментарии</Typography>
      <Box>
        {comments.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </Box>
      <Form />
    </>
  );
};
