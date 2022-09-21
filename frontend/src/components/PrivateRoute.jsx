import { useState, useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Spinner from './Spinner';

function PrivateRoute() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [status, setStatus] = useState()
  
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
      user ? setLoggedIn(true) : setLoggedIn(false)
      setStatus(false)
  }, [user])

  if (status) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : navigate('/login')
}

export default PrivateRoute;
