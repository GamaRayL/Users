import { CardContent, Card, Typography } from "@mui/material";

const CommentCard = ({ comment }) => {
  return (
    <Card
      sx={{
        mb: 1,
        minWidth: 375,
        borderRadius: 0,
      }}
    >
      <CardContent sx={{ pb: 0 }}>
        <Typography
          sx={{ fontSize: 12, mb: 0 }}
          color="text.secondary"
          gutterBottom
        >
          Имя:
        </Typography>
        <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
          {comment.name}
        </Typography>
      </CardContent>
      <CardContent sx={{ pb: 0 }}>
        <Typography
          sx={{ fontSize: 12, mb: 0 }}
          color="text.secondary"
          gutterBottom
        >
          Текст:
        </Typography>
        <Typography>{comment.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
