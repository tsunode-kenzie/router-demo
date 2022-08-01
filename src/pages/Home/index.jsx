import { Link, useHistory } from 'react-router-dom';
import Title from "../../components/Title"

const Home = () => {
  const history = useHistory();

  function goToDashboard() {
    history.push('/dashboard')
  }

  return (
    <>
      <Title>Teste</Title>
      <Link to="/dashboard">Dashboard</Link>
      <button onClick={goToDashboard}>Dashboard</button>
    </>
  )
}

export default Home