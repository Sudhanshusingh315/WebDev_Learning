import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [login, setLogin] = useState({});
  const handleInput = (e) => {
    console.log(e.target.value);
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    console.table(login);
    // dispatach the login state 
     
    
  };
  return (
    <>
      <h1>Hello this Is Sign Up Page</h1>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Eg:ss826063@gmail.com" name="email" onChange={(e)=>{handleInput(e)}} />

        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" name="password" onChange={(e)=>{handleInput(e)}} />
      </FormControl>
      <div>
        Don&apos;t have an account? <Link to="/register">Sing up</Link>
      </div>
      <Button colorScheme="blue" onClick={()=>{handleLogin()}}>Login</Button>
    </>
  );
}
