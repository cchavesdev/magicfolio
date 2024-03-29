import { useEffect, useState } from "react";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
const signIn = useSignIn();
    useEffect(()=>{
        let email = localStorage.getItem("email")
        if(email){
            setValue(email);
        }
       
    },[])




  const handleLogin = () => {
    signInWithPopup(auth, provider).then((response) => {
     if(response.user.email){
        setValue(response.user.email);
        signIn({
          token: 'asd123',
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: { email: 'carlos@domain.com' }
        });
     console.log(response);
      navigate('/');
     }
     
    }).catch((err)=>{
        console.log(err)
    });
  };
  return (
    <div className="login-container">
      <h2 className="text-center">Login to continue</h2>
        <Button
      variant="contained"
      color="primary"
      startIcon={<GoogleIcon />}
      onClick={handleLogin}
      className=""
      style={{margin: "auto", display: "flex"}}
    >
     Continue with Google
    </Button>
   
    </div>
  );
};
