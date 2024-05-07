import './App.css';
import { User } from './models/userModel';
import NavBar  from './components/NavBar';
import Products from './components/Products';

function App() {

  // const name = "Milica";
  const element = <h1>Dobrodosli</h1>;

  function fullName(user: User) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: "Milica",
    lastName: "Simic"
  }
  
  return (
    <>
      {/* <h1>Cao {fullName(user)}</h1>
      {element} */}
      <NavBar/>
      <Products/>
    </>

  )
}

export default App
