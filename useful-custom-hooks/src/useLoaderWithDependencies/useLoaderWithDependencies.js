import { useState, useEffect } from "react"

export default function useLoaderWithDependencies(initialValue=true,dependencies=[]) {
 const [loading,setLoading] = useState(initialValue);
useEffect(() => {
    let offLoader = dependencies.every(item=>item===false)
    if(loading && offLoader ){
        setLoading(false);
    }else if(loading===false && offLoader!==true){
        setLoading(true);
    }
}, [...dependencies])
 return [loading]
}
