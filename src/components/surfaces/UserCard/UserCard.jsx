import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserCard = ({ user }) => {
  return (
    <Card
      sx={{
        minWidth: 375,
        mb: 8,
        borderRadius: 0,
        border: 2,
      }}
    >
      <CardContent sx={{ pb: 0, borderBottom: 2 }}>
        <Typography
          sx={{ fontSize: 12, mb: 0 }}
          color="text.secondary"
          gutterBottom
        >
          Имя пользователя:
        </Typography>
        <Typography sx={{ fontSize: 35 }}>{user.username}</Typography>
      </CardContent>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <CardContent sx={{ pb: 0 }}>
          <Typography
            sx={{ fontSize: 12, mb: 0 }}
            color="text.secondary"
            gutterBottom
          >
            Имя / Фамилия:
          </Typography>
          <Typography sx={{ fontSize: 24 }}>{user.name}</Typography>
        </CardContent>
        <CardContent sx={{ pb: 0 }}>
          <Typography
            sx={{ fontSize: 12, mb: 0 }}
            color="text.secondary"
            gutterBottom
          >
            Почта:
          </Typography>
          <Typography sx={{ fontSize: 24 }}>{user.email}</Typography>
        </CardContent>
        <CardContent sx={{ pb: 0 }}>
          <Typography
            sx={{ fontSize: 12, mb: 0 }}
            color="text.secondary"
            gutterBottom
          >
            Номер телефона:
          </Typography>
          <Typography sx={{ fontSize: 24 }}>{user.phone}</Typography>
        </CardContent>
        <CardContent sx={{ pb: 0 }}>
          <Typography
            sx={{ fontSize: 12, mb: 0 }}
            color="text.secondary"
            gutterBottom
          >
            Веб-страница:
          </Typography>
          <Typography sx={{ fontSize: 24 }}>{user.website}</Typography>
        </CardContent>
        <CardContent sx={{ pb: 0 }}>
          <Typography
            sx={{ fontSize: 12, mb: 0 }}
            color="text.secondary"
            gutterBottom
          >
            Название компании и деятельность:
          </Typography>
          <Typography sx={{ fontSize: 24 }}>
            {user.company.name} / {user.company.bs}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default UserCard;
