import React, {useState} from 'react'
import { NewApi } from 'Api/new api/new-api'
import { Link, useNavigate } from "react-router-dom"
import "./style.scss"
import { setUser } from 'redux/userReducer'
import { useAppDispatch } from 'redux/hooks/hook'
import { Input } from 'components/Input/Input'
import { Button } from 'components/Button/Button'
import { Title } from 'components/Title/Title'

  const Register = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [state, setState] = useState({
      email: "",
      password: "",
      repeatPasswd: ""
    });
  
    const  handleSubmit = async (e: React.SyntheticEvent) => {
      e.preventDefault();
      const {email, password} = state;
      const data = await NewApi.Register(email,password);
      localStorage.setItem('user',data.token);
      const user = await NewApi.getUserSmb();
      dispatch(setUser(user))
      navigate('/people-page', {replace: true});
    };
  
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const item = e.target.name;
      setState({
        ...state,
        [item]: e.target.value
      });
    };
  return (
    <>
      <div className='box'>
      <Title>REGISTER</Title>
      <form onSubmit={handleSubmit} className="register">
        <div className="inputBox">
        <Input name="email" value={state.email} onChange={handleOnChange} type="email" mode='rounded' placeholder="Enter your email" />
        <Input name="password" value={state.password} onChange={handleOnChange} type="password" mode='rounded' placeholder="Enter your password" />
        <Input name="repeatPasswd" value={state.repeatPasswd} onChange={handleOnChange} type="password" mode='rounded' placeholder="Confirm your password" />
        <Button>Submit</Button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Register