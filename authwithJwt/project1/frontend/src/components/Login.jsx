import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/User/userSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const { userInfo, error ,isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({});
  const handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.table(login);
    // dispatach the login state
    dispatch(loginUser(login)).then(res =>{
      console.log("this is after the dispatch",res);
    });
  };

  // this is an astute way of dealing with logins
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  return (
    <>
      <h1>Hello this Is Sign Up Page</h1>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="Eg:ss826063@gmail.com"
          name="email"
          onChange={(e) => {
            handleInput(e);
          }}
        />

        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={(e) => {
            handleInput(e);
          }}
        />
      </FormControl>
      <div>
        Don&apos;t have an account? <Button colorScheme="pink"><Link to="/register">Sing up</Link></Button>
      </div>
      <Button
        colorScheme="blue"
        onClick={(e) => {
          handleLogin(e);
        }}
      >
        Login
      </Button>
      <div>{isLoading ? (<p>loding....</p>):(<p></p>)}</div>
      <div>{error && toast.error(error)}</div>
    </>
  );
}
