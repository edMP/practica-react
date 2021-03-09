import React from 'react'
import {
    Link,NavLink
  } from "react-router-dom";
  import {withRouter} from"react-router-dom"
  import {auth} from'../firebase'
const Navbar = (props) => {
    const cerrarsesion=()=>{
        auth.signOut().then(()=>props.history.push('/login'))
    }
    return (
        <div className="navbar navbar-dark bg-dark mt-5">
            <Link to="/" className="navbar-brand mx-2">
               buscaFilm
            </Link>
            <div>
                <div className="d-flex">
                    <NavLink to="/" exact className="btn btn-dark mr-2">
                        inicio
                    </NavLink>
                    
                    {
                        props.firebaseuser!==null?(
                            <button className="btn btn-dark"
                            onClick={()=>cerrarsesion()}>cerrar sesion</button>
                       ):(<NavLink to="/login"  className="btn btn-dark mr-2">
                           login
                         </NavLink>)
                    }
                    {props.firebaseuser!==null?(
                    <NavLink to="/admin"  className="btn btn-dark mr-2">
                    Buscar
                     </NavLink>
                    ):null
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(Navbar) 
