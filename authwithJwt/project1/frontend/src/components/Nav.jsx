import "./nav.css";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { GiFlowerHat } from "react-icons/gi";
import { logOutUser } from "../features/User/userSlice";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const handleLogout =() =>{
    console.log("handle logout here, login out");
    dispatch(logOutUser());

  }
  return (
    <>
      <div className="container">
       {userInfo ? (<>
       <div className="right">Hello {userInfo.name} <GiFlowerHat style={{display:"inline-block"}}/> </div>
       </>):(
        <>
        <div className="right">Mern auth screen</div>
        </>
       )} 
        <div className="left">
          {userInfo ? (
            <>
              <p>{userInfo.name}</p>
              <Button colorScheme="teal" variant="outline" onClick={()=>{navigate('/profile')}}>
               My profile 
              </Button>
              <Button colorScheme='red' onClick={()=>{
                handleLogout()
              }}>LOGOUT</Button>
            </>
          ) : (
            <>
              <button
                className="signIn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign In
              </button>
              <button
                className="signOut"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
