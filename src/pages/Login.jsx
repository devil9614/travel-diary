import { Button, Container, TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import desktopLogin from '../Assets/Backgrounds/desktopLogin.png'

const LoginBox = () => {
    return (
        <LoginContainer>
            <h3 style = {{color:"#191A19"}}>Log in</h3>
            <LoginForm>
                <FormElement><TextField size = "small" label = "Username"/></FormElement>
                <FormElement><TextField size = "small" label = "Password"/></FormElement>
                <Button variant = "outlined" style = {{marginTop:"24px",borderRadius:"12px",width:"230px",height:"40px",backgroundColor:"#CABBE9",color:"#fdfdfd",fontSize:"20px"}}>Log in</Button>
            </LoginForm>
            <p style = {{color:"#191A19"}}>New to here? <a href = "#">Sign Up</a></p>
        </LoginContainer>
    )
}

const Login = () => {
    return (
        <Main >
            <div>

            </div>
            <div>
                <LoginBox/>
            </div>
        </Main>
    )
}

const LoginForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const LoginContainer = styled.div`
    width:300px;
    height:350px;
    background-color:#FDFDFD;
    display:flex;
    flex-direction : column;
    align-items:center;
    justify-content:center;
    border-radius:27px;
    margin-right:20px;
`
const Main = styled.main`
    min-height:100vh;
    min-width:100vw;
    background:url(${desktopLogin});
    display:flex;
    justify-content:flex-end;
    align-items:center;
    background-position:center center;
    background-repeat:no-repeat;
    background-size:cover;
    @media screen and (min-width: 480px) {
        background-color:#
    }

`
const FormElement = styled.div`
    padding-top:24px;
    width:230px;
`

export default Login

