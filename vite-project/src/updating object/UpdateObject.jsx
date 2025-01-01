import { useState } from "react"

export default function UpdateObject() {
    const [data, setData] = useState(
        {
            name: "Tasin",
            age: "30",
            number: "69",
            address:"asdasd",
            gf: {
                punom: "yes",
                nafisa: "yes",
                mahmota: "no"
            }
        }
    )

    const [counter, setCounter] = useState(0)

    const updateName = () =>{
        
        setData({
            ...data,
            name: 'Akib',
        })
       
    }

    return (
        <div className="border my-10 p-10 flex justify-center">
            <div>
                <p>Name: {data.name}</p>
                <p>Age:{data.age}</p>
                <p>Number:{data.number}</p>
                <button className="border px-3 bg-slate-300 rounded-lg" onClick={updateName}>Change Name</button>
                <p>Counter: {counter}</p>
            </div>
        </div>
    )
}