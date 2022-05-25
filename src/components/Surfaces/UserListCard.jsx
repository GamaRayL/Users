import { Link } from "react-router-dom";
import {
  CardActions,
  CardContent,
  Card,
  Button,
  Typography,
} from "@mui/material";

const UserListCard = ({ user, posts }) => {
  return (
    <Card
      sx={{
        minWidth: 375,
        m: 1,
        borderRadius: 0,
        border: 2,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 35 }}>{user.name}</Typography>
      </CardContent>
      <CardActions>
        <Link style={{ all: "unset" }} to={`/userpage/${user.id}`}>
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
            }}
            variant="contained"
            color="inherit"
          >
            подробнее о пользователе
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default UserListCard;
