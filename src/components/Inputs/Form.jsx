import Box from "@mui/material/Box";
// import { addNewComment } from "../../store/comments/reducer";
// import { TextField, Button } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";

export default function Form() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
        m: 20,
        display: "flex",
        justifyContent: "center",
      }}
      noValidate
      autoComplete="on"
    >
      <form>
        <input type="text" name="name" id="" />
        <input type="email" name="email" id="" />
        <input type="submit" name="comment" value="" />
      </form>
      {/* <form onSubmit={handleSubmit}>
        <TextField required id="outlined-required" label="Имя" type="text" />
        <TextField id="outlined-email-input" label="Email" type="email" />
        <TextField
          id="outlined-multiline-static"
          label="Оставить комментарий"
          multiline
          rows={4}
          sx={{ width: 400 }}
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form> */}
    </Box>
  );
}
