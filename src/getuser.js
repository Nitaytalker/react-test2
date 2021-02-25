import { useEffect, useState } from "react";
import Todos from "./Todos"

function GetUsers() {
    const [loading, setLoading] = useState(true)
    const [users, setUser] = useState([])
    const [idTodos,setid]=useState(0)
    const [whatToShow,setShow]=useState("")

    async function userFetch() {
        const result = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await result.json()
        return data;
    }
    useEffect(()=>{
        let show = <Todos id={idTodos}/>
        setShow(show)
    },[idTodos])
    
    useEffect(() => {
        userFetch().then((data) => {
            setUser(data)
            setLoading(false)
        })
    }, [])
    


    function setUl(list){
        const myFuncList = list.map((user,index)=>{
            return(
                <li onClick={()=>{setid(user.id)}} key={index} style={{borderStyle:"dotted"}}>{user.name}</li>
            )
        })
        return (
            <ul >{myFuncList}</ul>
        )
    }


    return (
        <div className="getusers">
            <div style={{ display: loading ? 'block' : 'none' }}>
                loading
            </div>
            <div style={{ display: loading ? 'none' : 'block' }}>
                {setUl(users)}
            </div>
            {whatToShow}
        </div>

    )
}

export default GetUsers;