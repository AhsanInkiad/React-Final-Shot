import React, { useState } from 'react';

function ParentComponent(props) {

    const [parentCounter, setParentCounter] = useState(0)

    function InnerComponent(props) {
        const [counter, setCounter] = useState(0)
        return (
            <div>
                <p>This is inner component</p>
                <p>{counter}</p>
                <button className='px-5 bg-slate-300 rounded-md' onClick={()=>setCounter((prev)=>prev+1)}>Counter</button>
            </div>
        );
    }

    return (
        <div className='py-5 border flex justify-center items-center my-10'>
            <div>
                <p>Something.</p>
                <p>{parentCounter}</p>
                <button className='px-5 bg-slate-300 rounded-lg' onClick={()=>setParentCounter((prev)=>prev+1)}>Parent Counter</button>
                <InnerComponent></InnerComponent>
            </div>
        </div>
    );
}

export default ParentComponent;