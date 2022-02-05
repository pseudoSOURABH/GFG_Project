import React, { Suspense, useState, useEffect } from 'react'; 

let B = React.lazy(() => import('./b.js'));

export default function A() {
    let [showB, setShowB] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowB(true);
        }, 5000)

    }, [])
    return <div>
        Hello Buddy ,whataap?
        <Suspense fallback={<div>Loading...</div>}>
        {showB && <B />}
        </Suspense>
    </div>
}