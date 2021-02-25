
import { useEffect, useState } from "react";


function Todos({id}){
    const [users, setUser] = useState([])
  
    async function userFetch() {
        const result = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`)
        const data = await result.json()
        return data;
    }
    useEffect(() => {
        userFetch().then((data) => {
            setUser(data)
        })
    }, [id])
    function printTitle(users){
        const titles = users.map((user,index)=>{
            return(
                <li key={index}>{user.title}</li>
            )
        })
        return titles;
    }

    return(
        <div className="Todos">
            <ul>
            {printTitle(users)}
            </ul>
        </div>
    )
}

export default Todos;


