import { CardContent, Card, Typography } from "@mui/material";

const PostCard = ({ post }) => {
  return (
    <Card
      sx={{
        minWidth: 375,
        borderRadius: 0,
        border: 1,
        mb: 8,
      }}
    >
      <CardContent sx={{ pb: 0 }}>
        <Typography sx={{ fontSize: 34, fontWeight: 500 }}>
          {post.title}
        </Typography>
      </CardContent>
      <CardContent sx={{ pb: 0 }}>
        <Typography color="text.secondary">{post.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
