import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function LoginPage() {
  return (
    <div
      style={{ height: "100vh" }}
      className="bg-dark d-flex justify-content-center align-items-center"
    >
      <div style={{ minheight: "50vh" }} className="container bg-light">
        <h1>Login</h1>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <div>
            <Stack>
              <Button variant="contained" color="success">
                Success
              </Button>
              <Button variant="outlined" color="error">
                Error
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
