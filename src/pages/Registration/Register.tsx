import React, {useState} from 'react'
import { NewApi } from 'Api/new api/new-api'
import { Link, useNavigate } from "react-router-dom"
import "./style.scss"
import { setUser } from 'redux/userReducer'
import { useAppDispatch } from 'redux/hooks/hook'

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
      <h2>REGISTER</h2>
      <form onSubmit={handleSubmit} className="register">
        <div className="inputBox">
        <input name="email" value={state.email} onChange={handleOnChange} type="email" className="regName" placeholder="Enter your email" />
        <input name="password" value={state.password} onChange={handleOnChange} type="password" className="passwdReg" placeholder="Enter your password" />
        <input name="repeatPasswd" value={state.repeatPasswd} onChange={handleOnChange} type="password" className="passwdReg" placeholder="Confirm your password" />
        <button type="submit" className="submBtn">Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Register