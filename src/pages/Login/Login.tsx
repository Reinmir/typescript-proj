import React, {useState} from 'react'
import { NewApi } from 'Api/new api/new-api'
import { Link, useNavigate } from "react-router-dom"
import FormBuilder from '../../components/FormBuilder/FormBuilder'
import "./style.scss"
import { useAppDispatch } from 'redux/hooks/hook'
import { setUser } from 'redux/userReducer'
import { Input } from 'components/Input/Input'
import { Button } from 'components/Button/Button'
import { Title } from 'components/Title/Title'



const Login = () => {
  const [name, setName] = useState("");
  const [passwdLogin, setpasswdLogin] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isPasswordValid, setisPasswordValid] = useState(true);
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    //validation
    if(name.length > 22 || name.length < 3){
      setIsNameValid(false)
    }
    try {
      const data = await NewApi.Login(name,passwdLogin);
      localStorage.setItem('user', data.token);
      const user = await NewApi.getUserSmb();
      dispatch(setUser(user))
      navigate("/people-page", {replace: true}); 
    } catch (error) {
      setisPasswordValid(false)
    }
  };
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, setFunc: Function) => {
    setFunc(e.target.value);
  };
  return (
    <>
      
      <div className='box'>
      <Title>LOGIN</Title>
      <form onSubmit={handleSubmit}  className="login">
        <div className="inputBox">
          <Input isValid={isNameValid} errorMsg='Incorrect email' value={name} onChange={(e) => handleOnChange(e,setName)} required type="email" placeholder="Enter your email" mode='rounded'/>
          <Input isValid={isPasswordValid} errorMsg='Incorrect password' value={passwdLogin}
          onChange={(e) => handleOnChange(e,setpasswdLogin)} onBlur={() => setisPasswordValid(true)} required type="password" mode='rounded' placeholder="Enter your password" />
          <Button>Submit</Button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Login
