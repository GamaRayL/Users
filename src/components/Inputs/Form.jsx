import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { fetchComment, writeInputValue } from "store/comment/reducer";
import { fetchCommentsData } from "store/comments/reducer";

export default function Form() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.comment);

  const writeInputDataToStore = useCallback(
    (el) => {
      dispatch(
        writeInputValue({
          name: el.currentTarget.name,
          value: el.currentTarget.value,
        })
      );
    },
    [dispatch]
  );

  const submitForm = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(fetchComment(formData)).then(() =>
        dispatch(fetchCommentsData())
      );
    },
    [dispatch, formData]
  );

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mr: 0.5, mt: 1, width: "300px" },
        display: "flex",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        id="outlined-basic"
        label="Имя"
        variant="outlined"
        type="text"
        name="name"
        onBlur={writeInputDataToStore}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        onBlur={writeInputDataToStore}
      />
      <TextField
        sx={{ borderRadius: 0 }}
        id="outlined-basic"
        label="Комментарий"
        variant="outlined"
        type="text"
        name="comment"
        onBlur={writeInputDataToStore}
      />
      <Button
        sx={{
          ":hover": {
            bgcolor: "white",
            color: "black",
          },
          width: 375,
          borderRadius: 0,
          mt: 2,
          backgroundColor: "black",
          color: "white",
        }}
        onClick={submitForm}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Отправить комментарий
      </Button>
    </Box>
  );
}
