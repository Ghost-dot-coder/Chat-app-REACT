import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useState, useEffect } from "react";
import { auth } from "./Fire";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  var loginStatus = false


// firebase login handling
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      loginStatus = true
    } catch (error) {
      console.log(error);
    }
  };
if (loginStatus == true) {
  
}


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe;
  }, []);
  return (
    <div
      style={{ height: "100vh" }}
      className="bg-dark d-flex justify-content-center align-items-center"
    >
      <div
        style={{}}
        className="p-5 rounded bg-light d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="mb-5">LOGIN</h1>
        <div>
          <Stack spacing={2}>
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              id="outlined-required"
              label="mail-id"
            />
            <TextField
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              className="mb-3"
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              style={{ width: "100%" }}
              variant="contained"
              color="success"
              onClick={handleLogin}
            >
              Login
            </Button>
            {/* <Button variant="outlined" color="error">
              Error
            </Button> */}
          </Stack>
        </div>
      </div>
    </div>
  );
}
