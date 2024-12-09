import { useState } from "react"
import { Counter } from "../components/Counter"

export function KeyProp1() {
    const [isKyle, setIsKyle] = useState(true)
    const [isKyle1, setIsKyle1] = useState(true)
    const [isKyle2, setIsKyle2] = useState(true)
    return (
        <div className="border m-10 p-5">
            {/* With error */}
            <div className='flex flex-col justify-center items-center'>
                {isKyle ? <Counter name="Kyle"></Counter> : <Counter name="Sally"></Counter>}
                <button className='border' onClick={() => setIsKyle(k => !k)}>Swap</button>
            </div>


            {/* Solution 1 */}
            <div className='flex flex-col justify-center items-center mt-10'>
                {isKyle1 ? <div> <Counter name="Kyle"></Counter> </div> :  <Counter name="Sally"></Counter>}
                <button className='border' onClick={() => setIsKyle1(k => !k)}>Swap</button>
            </div>

            {/* Solution-2 (with key) */}
            <div className='flex flex-col items-center justify-center mt-10'>
                <p>(with key)</p>
                {isKyle2 ? <Counter key="Kyle" name="Kyle"></Counter> : <Counter key="Sally" name="Sally"></Counter>}
                <button className='border' onClick={() => setIsKyle2(k => !k)}>Swap</button>
            </div>
        </div>

    )
}