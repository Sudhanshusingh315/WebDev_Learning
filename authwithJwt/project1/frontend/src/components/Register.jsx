import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [register,setRegister] = useState({});
  const handleInput=(e)=>{
    console.log(e.target.value)
    setRegister({...register,[e.target.name]:e.target.value})
  }
 const handleLogin=()=>{
  console.table(register);
  // dispatch the register state
 }
  return (
    <>
      <div>do the work</div>
      <h1>Especialy when you don&asop;t feel like it</h1>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="text" onChange={(e)=>{handleInput(e)}} />
        <FormLabel>Name</FormLabel>
        <Input type="email" />
        <FormLabel>Email</FormLabel>
        <Input type="text" onChange={(e)=>{handleInput(e)}}/>
        <FormLabel>Password</FormLabel>
        <Input type="password" onChange={(e)=>{handleInput(e)}}/>
      </FormControl>
      <Button colorScheme="blue" onClick={()=>{handleLogin()}}>Sign up</Button>
      <div>already have an account? <Link to="/login">Login in</Link></div>
    </>

  );
}
