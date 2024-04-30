// function Counter(){
//     var count=0;
//     const increaseCount=()=>
//     {
//         count++;
//         console.log(count);
//     };
//     return(
//         <div>
//             <h1 className="ms-5">Count value:{count}</h1>
//             <button onClick={increaseCount} className="btn btn-outline-success m-3">inccount</button>
//             <button onClick={increaseCount} className="btn btn-outline-danger m-3">decrcount</button>
//         </div>
//     );
// }
import {useState} from 'react';
function Counter()
{
    let [state,setState]=useState(0);   
    const increaseCount=()=>
    {
     setState(state+1);
    };
   
    const decreaseCount=()=>
    {
     setState(state-1);
    };
    const clearCount=()=>
    {
     setState(0);
    };
    return(
        <div className="mt-3 text-center border ">
            <h1 className="ms-5">Count value : {state}</h1>
            <button onClick={increaseCount} className="btn btn-outline-success m-3">inccount</button>
            <button onClick={decreaseCount} className="btn btn-outline-danger m-3">decrcount</button>
            <button onClick={clearCount} className="btn btn-outline-primary m-3">clearcount</button>
        </div>
    );
}
export default Counter;
