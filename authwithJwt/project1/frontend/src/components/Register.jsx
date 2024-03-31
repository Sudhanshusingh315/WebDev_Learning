import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../features/User/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./register.css";
import { reset } from "../features/User/userSlice";
export default function Register() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({});
  const { isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    console.table(register);
    setRegister({});

    dispatch(registerUser(register)).then((res) => {
      dispatch(reset());
      console.log(res);
      if (res.payload._id) {
        navigate("/");
      }
    });

    // dispatch the register state
  };
  return (
    <>
      <div className="signupContainer">
        <div className="wapper">
          <h1>Do the hard work,Especialy when you don&apos;t feel like it</h1>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="text"
              name="email"
              onChange={(e) => {
                handleInput(e);
              }}
            />
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              onChange={(e) => {
                handleInput(e);
              }}
            />

            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            onClick={(e) => {
              handleRegister(e);
            }}
          >
            Sign up
          </Button>
          <div>
            already have an account? <Link to="/login">Login in</Link>
          </div>
          {isLoading && <div>Loading meow</div>}
          {error && toast.error(error)}
        </div>
      </div>
    </>
  );
}
