import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Form() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
        <TextField required id="outlined-required" label="Имя" type="text" />
        <TextField id="outlined-email-input" label="Email" type="email" />
        <TextField
          id="outlined-read-only-input"
          label="Оставьте комментарий"
          type="text"
        />
      </div>
    </Box>
  );
}
