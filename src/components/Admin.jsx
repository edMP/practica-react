import React,{useState} from 'react'
import {withRouter} from"react-router-dom"
import {auth} from'../firebase'
const Admin = (props) => {
    const [titulo, setTitulo] = useState("")
    const [anno, setAnno] = useState("")
    const [peliculas, setPeliculas] = useState([])
    const [error, setError] = useState(null)
   
   
    const procesar=e=>{
        e.preventDefault()
       
        if(!titulo.trim()){
            setError("el titulo de la pelicua es obligatorio")
            return
        }
        
        
        cartelera()
      
    }
   
        const cartelera=async()=>{
            const data=await fetch(`http://www.omdbapi.com/?apikey=ba40df7c&t=${titulo}&y=${anno}`)
            
            const film=await data.json()
    
            setPeliculas(film)
            setError(null)
        }
        
   
    return (
        <div>
            <form onSubmit={procesar}>
                {
                    error&&(
                        <div className="alert alert-danger">{error}</div>

                    )
                }
                <input  type="texts" className="form-control mt-2 mb-2"placeholder="* titulo de la pelicula" onChange={(e)=>setTitulo(e.target.value)} value={titulo}/>  
                <input type="text" className="form-control mt-3 mb-2"placeholder="anno" onChange={(e)=>setAnno(e.target.value)} value={anno} />
                <button className="btn btn-lg btn-dark btm-sm  mb-2 w-100" type="button"type="submit">
                                buscar
                            </button>
            </form>
            
            <h4>pelicula</h4>
            {
                peliculas.Response=='False'?(
                    <img src='https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg' />
                    
                ):(
                    <h3>{peliculas.Title}</h3>
                    )
                
            }
            
            <img src={peliculas.Poster} />
                    <p>{peliculas.Plot}</p>
                
        </div>
    )
}

export default withRouter(Admin)
