import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextType } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const lastPath = localStorage.getItem('lastPath') ?? '';

  const onLogin = () => {
    login('Victor');
    navigate(lastPath, { replace: true })
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  )
};
