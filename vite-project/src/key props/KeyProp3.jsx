import { Fragment, useState } from "react";

export function KeyProp3() {
    const [showForm1, setShowForm1] = useState(true);
    const [showFormA, setShowFormA] = useState(true);

    return (
        <div className="flex border m-10 p-5 justify-center gap-10">
            <div className="border p-5">
                <h1>Uncontrolled Input Without Keys but 2 different block</h1>
                <button onClick={() => setShowForm1(!showForm1)}>Toggle</button>

                {showForm1 && (
                    <div>
                        <h2>Form 1</h2>
                        <input type="text" placeholder="Form 1 input" />
                    </div>
                )}

                {!showForm1 && (
                    <div>
                        <h2>Form 2</h2>
                        <input type="text" placeholder="Form 2 input" />
                    </div>
                )}
            </div>

            <div className="border p-5">
                <h1>Uncontrolled Input Without Keys but single block</h1>
                <button onClick={() => setShowFormA(!showFormA)}>Toggle</button>

                {showFormA ?
                    <div>
                        <h2>Form 1</h2>
                        <input type="text" placeholder="Form 1 input" />
                    </div>
                    :
                    <div>
                        <h2>Form 2</h2>
                        <input type="text" placeholder="Form 2 input" />
                    </div>
                }
            </div>
        </div>

    );
}
