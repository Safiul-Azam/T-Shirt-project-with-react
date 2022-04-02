import { useEffect, useState } from "react"

const useTShirt = () => {
    const [tShirts , setTShirt] = useState([])
    useEffect(()=>{
        fetch('t-shirt.json')
        .then(res => res.json())
        .then(data => setTShirt(data))
    },[])
    return [tShirts, setTShirt]
}
export default useTShirt