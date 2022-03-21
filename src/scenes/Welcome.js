import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'

export default function Welcome({ users }) {
  console.log(users) // email, displayName, photoURL

  const auth = getAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear()
        navigate('/login')
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <>
      <h1>Welcome</h1>
      <h2>{users.usersName || users.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}