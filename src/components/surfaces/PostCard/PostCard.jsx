import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PostCard = ({ post }) => {
  return (
    <Card
      sx={{
        minWidth: 375,
        maxWidth: "32%",
        m: 1,
        borderRadius: 0,
        border: 1,
      }}
    >
      <CardContent sx={{ pb: 0 }}>
        <Typography sx={{ fontSize: 22, fontWeight: 500 }}>
          {post.title}
        </Typography>
      </CardContent>
      <CardContent sx={{ pb: 0 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {post.body.slice(0, 100) + "..."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
