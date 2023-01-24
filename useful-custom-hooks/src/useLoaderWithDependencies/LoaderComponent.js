import React ,{useState} from 'react';
import useLoaderWithDependencies from './useLoaderWithDependencies';


export default function LoaderComponent() {
const [count1,setCount1] = useState(false);
const [count2,setCount2] = useState(false);
const [count3,setCount3] = useState(false);
const [count4,setCount4] = useState(false);
const [loading] = useLoaderWithDependencies(false,[count1,count2,count3,count4])

    return (
        <div>
           {loading? `Loader`:`Not loading`} 
           <br/>
           <button onClick={() => setCount1(true)}> on load in count 1</button>
           <button onClick={() => setCount1(false)}>off load in count 1</button>
           <br/>
           <button onClick={() => setCount2(true)}> on load in count 2</button>
           <button onClick={() => setCount2(false)}>off load in count 2</button>
           <br/>
           <button onClick={() => setCount3(true)}> on load in count 3</button>
           <button onClick={() => setCount3(false)}>off load in count 3</button>
           <br/>
           <button onClick={() => setCount4(true)}> on load in count 4</button>
           <button onClick={() => setCount4(false)}>off load in count 4</button>
        </div>
    )
}
