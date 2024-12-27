import { useState } from 'react';

export default function State1() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <>
    {/* Without updater function */}
     <div className='border flex gap-10 justify-center p-10 w-1/2 mx-auto my-20'>
      <h1>{number}</h1>
      <button className='border rounded-lg px-3 bg-slate-200' onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </div>

    {/* With updater function */}
    <div className='border flex gap-10 justify-center p-10 w-1/2 mx-auto my-20'>
      <h1>{number2}</h1>
      <button className='border rounded-lg px-3 bg-slate-200' onClick={() => {
        setNumber2(prev => prev + 1);
        setNumber2(prev => prev + 1);
        setNumber2(prev => prev + 1);
      }}>+3</button>
    </div>
    </>
    
  )
}
