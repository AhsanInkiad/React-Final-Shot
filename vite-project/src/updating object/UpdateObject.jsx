import { useState } from "react"

export default function UpdateObject() {
    const [data, setData] = useState(
        {
            name: "John",
            age: "30",
            number: "69",
            address: "asdasd"
        }
    )

    const [data2, setData2] = useState(
        {
            name: "John",
            age: "30",
            number: "69",
            address: "asdasd"
        }
    )


    const updateName = () => {
        setData({
            ...data,
            name: 'Diego',
        })

    }

    const updateName2 = () => {
        data2.name = "Diego"
        setData2(data2)

    }

    return (
        <div className="border gap-10 my-10 p-10 flex justify-center">
            <div>
                <p>Name: {data.name}</p>
                <button className="border px-3 bg-slate-300 rounded-lg" onClick={updateName}>Change Name</button>
                <p>Age:{data.age}</p>
                <p>Number:{data.number}</p>
            </div>

            <div>
                <p>Name: {data2.name}</p>
                <button className="border px-3 bg-slate-300 rounded-lg" onClick={updateName2}>Change Name</button>
                <p>Age:{data2.age}</p>
                <p>Number:{data2.number}</p>
            </div>
        </div>
    )
}