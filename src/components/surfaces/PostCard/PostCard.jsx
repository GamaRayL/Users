import { CardContent, Card, Typography } from "@mui/material";

const PostCard = ({ post }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 375,
        mr: 20,
        ml: 20,
        borderRadius: 0,
        border: 1,
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
