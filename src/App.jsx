import React,{useState} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Admin from './components/Admin';
import Reset from './components/Reset';
import {auth} from'./firebase';
import moment from 'moment';
import 'moment/locale/es';

function App() {
 
  const fecha=moment()
  
  
  const [firebaseuser, setFirebaseuser] = useState(false)
  React.useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setFirebaseuser(user)
      }else{
        setFirebaseuser(null)
      }
    })
  },[])
  return ( firebaseuser!==false&&(
    <Router>
    <div className="container">
      <Navbar firebaseuser={firebaseuser}/>
      <Switch>
          <Route path="/login">
           <Login/>
          </Route>
          <Route path='/reset' >
            <Reset/>
          </Route>
          
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/" exact>
           
            <h3>{fecha.format('dddd Do MMMM YYYY')}</h3>
            
          </Route>

      </Switch>
    </div>
    </Router>
  ));
}

export default App;
