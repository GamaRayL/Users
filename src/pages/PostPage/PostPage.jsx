import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostCard from "../../components/surfaces/PostCard/PostCard";
import Form from "../../components/Inputs/Form";

export const PostPage = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.postsEntities).filter(
    (post) => post.id === Number(id)
  );
  return (
    <>
      {post.map((post) => (
        <PostCard post={post} />
      ))}
      <Form />
    </>
  );
};
