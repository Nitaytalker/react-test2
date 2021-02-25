import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
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
            <Container style={{ display: loading ? 'block' : 'none' }}>
                loading
            </Container>
            <Container style={{ display: loading ? 'none' : 'block' }}>
                {setUl(users)}
            </Container>
            {whatToShow}
        </div>

    )
}

export default GetUsers;