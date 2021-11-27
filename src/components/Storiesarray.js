import "./cssplik.css";
import Stories from "components/Stories";
import axios from "axios";
import { useEffect, useState } from "react";

const Storiesarray = () => {
    const [users, setUsers] = useState(false);
    useEffect(()=> {
        axios.get(`https://deploygram.deployed.space/stories`).then((res) => {
            const array = res.data.map((v) => {
                console.log(v.image)
                return [v.username, v.image];
            })
            setUsers(array);
        })
    }, [])
    return (
        <div className="prostokat">
        {
            users ? users.map((data) => {
                console.log(data[1])
                return <Stories key={data[0]} imgSrc={data[1]} userId={data[0]}/>
            }) : ""
        }
        </div>
    )
}
export default Storiesarray;