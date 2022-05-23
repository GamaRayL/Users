import { Link } from "react-router-dom";
import {
  CardActions,
  CardContent,
  Card,
  Button,
  Typography,
} from "@mui/material";

const PostListCard = ({ post }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
      <CardActions>
        <Link style={{ all: "unset" }} to={`/userpost/${post.id}`}>
          <Button
            sx={{
              ":hover": {
                bgcolor: "white",
                color: "black",
              },
              borderRadius: 0,
              mt: 2,
              backgroundColor: "black",
              color: "white",
            }}
            variant="contained"
            color="inherit"
          >
            перейти к посту
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PostListCard;
