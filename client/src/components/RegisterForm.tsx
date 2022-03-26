import { useState } from 'react';
import { RegisterInput, RegisterContainer, RegisterButton } from '../styles/registerForm-styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { InputAdornment, ThemeProvider } from '@mui/material';
import {AccountCircle, Email, Key} from '@mui/icons-material';
import { customTheme } from '../styles/registerForm-styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })
    
    const handleChange = (e: any) => {
       setUserDetails({
        ...userDetails,
        [e.target.name]: e.target.value
       })
       console.log(userDetails)
    }

    const handleUserRegister = (e:any) => {
        e.preventDefault()
        axios.post("http://localhost:5656/api/register", userDetails)
        .then((res) =>{
            console.log(res)
            setUserDetails({
                username: "",
                email: "",
                password: "",
                passwordConfirmation: ""
               })
               navigate("/home")
        }).catch(err => {
            console.error(err)
        })
    }


  return (
    <RegisterContainer onSubmit={handleUserRegister}>
        <RegisterInput name='username' placeholder='Username' value={userDetails.username} onChange={handleChange}  startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }/>
        <RegisterInput name="email" placeholder='Email' value={userDetails.email} onChange={handleChange}   startAdornment={
          <InputAdornment position="start">
            <Email />
          </InputAdornment>
        }/>
        <RegisterInput name="password" placeholder='Password' value={userDetails.password} onChange={handleChange}   startAdornment={
          <InputAdornment position="start">
            <Key />
          </InputAdornment>
        }/>
        <RegisterInput name="passwordConfirmation" placeholder='Confirm Password' value={userDetails.passwordConfirmation} onChange={handleChange}   startAdornment={
          <InputAdornment position="start">
            <Key />
          </InputAdornment>
        }/>

        <ThemeProvider theme={customTheme}>
        <RegisterButton type='submit' variant='contained'>Submit</RegisterButton>
        </ThemeProvider>
    

        </RegisterContainer>
  )
}
