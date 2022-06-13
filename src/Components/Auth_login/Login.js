import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { Auth_types } from '../../Redux/Actiontypes/Auth_types';




const Login = () => {

  const [state, setState] = useState({
    data: '123',
    showError: false
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const submit = () => {

    // localStorage.setItem('token', 123)
    // navigate('/dashboard')

    dispatch({
      type: Auth_types.LOGIN_REQUEST,
      callback: (value) => {
        if (value) {
          navigate("/Dashboard");
        }
      },
    })

  }

  return (
    <div>
      <Button type='submit' onClick={submit}>Login</Button>
    </div>
  )
}

export default Login;