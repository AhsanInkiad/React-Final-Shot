import './App.css'
import ParentComponent from './inner component/ParentComponent'
import { KeyProp1 } from './key props/KeyProp1'
import { KeyProp2 } from './key props/KeyProp2'
import { KeyProp3 } from './key props/KeyProp3'

import State1 from './series of state updates/State1'
import UpdateObject from './updating object/UpdateObject'
import TaskApp from './without reducer/TaskApp'



function App() {
  return (
    <>
      <KeyProp1></KeyProp1>
      <KeyProp2></KeyProp2>
      <KeyProp3></KeyProp3>
      <State1></State1>
      <UpdateObject></UpdateObject>
      <ParentComponent></ParentComponent>
      <div className='flex justify-center p-6 items-center'>
        <div className='border border-black p-6'>
         <TaskApp></TaskApp>
        </div>

      </div>

    </>
  )
}

export default App
