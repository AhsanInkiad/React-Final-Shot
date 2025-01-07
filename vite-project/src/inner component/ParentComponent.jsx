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

// Question is why declaring components inside another component is an 𝗮𝗻𝘁𝗶𝗽𝗮𝘁𝘁𝗲𝗿𝗻 in React? 

// At first let’s set the stage with some key context:

// 1️⃣ 𝗛𝗼𝘄 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 𝗔𝗿𝗲 𝗖𝗼𝗺𝗽𝗮𝗿𝗲𝗱 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁:
// In JavaScript, functions are objects -> specifically, callable objects.

// When comparing two functions:
// 𝗰𝗼𝗻𝘀𝘁 𝗮 = () => {}; 
// 𝗰𝗼𝗻𝘀𝘁 𝗯 = () => {}; 
// 𝗰𝗼𝗻𝘀𝗼𝗹𝗲.𝗹𝗼𝗴(𝗮 === 𝗯); // 𝗳𝗮𝗹𝘀𝗲 

// Functions are compared by reference, not by value.
// Every time a function is redefined, it gets a 𝗻𝗲𝘄 𝗿𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲 in memory.

// 2️⃣ 𝗠𝗼𝘂𝗻𝘁𝗶𝗻𝗴 𝘃𝘀 𝗥𝗲-𝗥𝗲𝗻𝗱𝗲𝗿𝗶𝗻𝗴 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁:
// Mounting: A component is created from scratch, initializing state, lifecycle and effects.
// Re-Rendering: A component updates without losing its identity, state, or lifecycle methods.

// 3️⃣ 𝗛𝗼𝘄 𝗥𝗲𝗰𝗼𝗻𝗰𝗶𝗹𝗶𝗮𝘁𝗶𝗼𝗻 𝗪𝗼𝗿𝗸𝘀 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁 (discussing only 𝘁𝘆𝗽𝗲 𝗰𝗵𝗲𝗰𝗸 for our context):
// React first checks if the 𝘁𝘆𝗽𝗲 of the component (e.g., "div", "span", InnerComponent) is the same between the previous and new render. If the type matches, React proceeds to update the existing component (𝗿𝗲-𝗿𝗲𝗻𝗱𝗲𝗿).If the type differs, React will unmount the old component and mount a new one (𝗿𝗲-𝗺𝗼𝘂𝗻𝘁).
// [Notice why I have used double quotation for 𝗛𝗧𝗠𝗟 𝘁𝗮𝗴𝘀 ("div", "span") but not for 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁 (InnerComponent)? Because when React gets a command to mount the app (initial render), it iterates over that tree and does the following:
// i) If the "type" is a 𝘀𝘁𝗿𝗶𝗻𝗴, it generates the 𝗛𝗧𝗠𝗟 𝗲𝗹𝗲𝗺𝗲𝗻𝘁 of that type.
// As "div", "span" these are strings, React understands that these are HTML elements.
// ii) If the "type" is a 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 (i.e., 𝗼𝘂𝗿 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁), it calls it and iterates over the tree that this function returned.]

// 💡 Now, let’s answer the question: Why is it an Anti-Pattern?.

// 🔗 𝗨𝘀𝗶𝗻𝗴 𝗖𝗼𝗻𝘁𝗲𝘅𝘁 𝟭:
// Every time ParentComponent 𝗿𝗲-𝗿𝗲𝗻𝗱𝗲𝗿𝘀, InnerComponent is 𝗿𝗲𝗱𝗲𝗳𝗶𝗻𝗲𝗱. This means it (InnerComponent) gets a new reference in memory every single time. So when React tries to compare, it will compare two different functions: one before re-render and one after re-render.

// 🔗 𝗨𝘀𝗶𝗻𝗴 𝗖𝗼𝗻𝘁𝗲𝘅𝘁 𝟯:
// During reconciliation, React checks the type. InnerComponent is a 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 type and while its name remains the same, its 𝗿𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗰𝗵𝗮𝗻𝗴𝗲𝘀 𝗼𝗻 𝗲𝘃𝗲𝗿𝘆 𝗿𝗲𝗻𝗱𝗲𝗿 so React interprets this as a new component each time. And thus the InnerComponent gets 𝗿𝗲-𝗺𝗼𝘂𝗻𝘁𝗲𝗱 every time.

// 🔗 𝗨𝘀𝗶𝗻𝗴 𝗖𝗼𝗻𝘁𝗲𝘅𝘁 𝟮:
// Remounting means 𝗿𝗲𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴 𝘁𝗵𝗲 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁 𝗳𝗿𝗼𝗺 𝘀𝗰𝗿𝗮𝘁𝗰𝗵 so,state, lifecycle effects and side effects tied to InnerComponent are lost on every render beacause the InnerComponent 𝗿𝗲-𝗺𝗼𝘂𝗻𝘁𝘀 whenever the ParentComponent re-renders.