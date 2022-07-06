import React, {useState} from 'react'
import { NewApi } from 'Api/new api/new-api'
import { Link, useNavigate } from "react-router-dom"

import FormBuilder from '../../components/FormBuilder/FormBuilder'
import "./style.scss"
import { useAppDispatch } from 'redux/hooks/hook'
import { setUser } from 'redux/userReducer'



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
      
      <div className='div2'><h1>LOGIN</h1>
      <form onSubmit={handleSubmit}  className="login">
        <input value={name}
        onChange={(e) => handleOnChange(e,setName)} required type="email" className="loginName" placeholder="Enter your email" />
        {!isNameValid && <p>Invalid email</p>}
        <input value={passwdLogin}
        onChange={(e) => handleOnChange(e,setpasswdLogin)} onBlur={() => setisPasswordValid(true)} required type="password" className="passwdLogin" placeholder="Enter your password" />
        {!isPasswordValid && <p>Invalid password</p>}
        <button type="submit" className="submBttn">Submit</button>
      </form>
      </div>
    </>
  )
}

export default Login
