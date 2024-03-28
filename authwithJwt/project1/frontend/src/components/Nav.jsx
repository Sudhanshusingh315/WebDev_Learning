import "./nav.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="right">Mern Auth Outside screen meow</div>
        <div className="left">
          <button className="signIn" onClick={() => {
            navigate('/login')
          }}>
            Sign In
          </button>
          <button className="signOut" onClick={()=>{
            navigate('/register')
          }}>Sign Out</button>
        </div>
      </div>
    </>
  );
}
