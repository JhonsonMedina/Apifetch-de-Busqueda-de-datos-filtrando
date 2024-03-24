import { useEffect, useState } from "react"
 import'./busqueda.css'

const Busqueda = () => {

const[users, setUsers] = useState([])
const[busqueda, setBusqueda] = useState("")


const URL = "https://jsonplaceholder.typicode.com/users"

const ShowDate = async () => {

    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data);
}

ShowDate()



const buscar = (e) => {
    setBusqueda(e.target.value)
   // console.log(e.target.value)
}

let result = []
if(!busqueda)
{
    result = users
}  else{
result = users.filter((dato) =>
dato.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
)
}


useEffect(() => {
    ShowDate()
},[])

    return(
     <>
     <div>  

<input value={busqueda} onChange={buscar} type="text" placeholder="Busqueda" className="form-control"/>

    <table>
      <thead>
        <tr>
         <th className="col-6 col-sm-3 estado">NAME </th>
         <th className="col-6 col-sm-3 estado">USER NAME</th>
        </tr>
      </thead>

    <tbody>
       { result.map( (user) => (
          <tr key={user.id}>
             <td className="col-6 col-sm-3 usuario"> {user.name}</td>
             <td className="col-6 col-sm-3 usuario"> {user.username}</td>
          </tr>

       ))} 
        
    </tbody>  
    
    </table>
    </div> 
    </>
    )
}

export default Busqueda