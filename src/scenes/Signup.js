import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'


export default function Signup({ setUserName }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth('app');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        'setUsers'(result.userName)
        navigate('/')
      })
      .catch(alert)

  }
  return (
    <>
      <h1>Signup</h1>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <label>Email:
          <input type="email" value={email}
            onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>Password:
          <input type="password" value={password}
            onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Sign up" />
      </form>
      <p>Already a user? <Link to="/login">Login</Link></p>
    </>
  )
}