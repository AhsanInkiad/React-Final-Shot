import { useState } from "react"

export function KeyProp2() {
    const [items, setItems] = useState(
        [
            { id: "a1", name: "Name" },
            { id: "a2", name: "Id" },
            { id: "a3", name: "Number" }
        ]
    )

    const shuffleItems = () => {
        const shuffled = [...items.sort(() => Math.random() - 0.5)];
        setItems(shuffled)
    }
    return (
        <div className="border m-10 p-5 flex flex-col justify-center items-center">
            <h1>Testing Keys in React</h1>
            <button className="border bg-slate-300 px-5 rounded-lg" onClick={shuffleItems}>Shuffle Items</button>

            <h2 className="mt-10">With index as keys</h2>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>
                            {item.name}- <input placeholder="type something"/>
                        </li>
                    ))
                }
            </ul>

            <h2 className="mt-10"> With unique id as key</h2>
            <ul>
                {
                    items.map((item)=>(
                        <li key={item.id}>
                            {item.name} - <input placeholder="type somehting" />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}