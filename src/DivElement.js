import { forwardRef, useImperativeHandle, useRef } from "react"

function DivElement(props,ref){
    const divRef = useRef()
    useImperativeHandle(ref, () =>({ 
       
    }))
    
    return(
        <div  {...props} ref= {divRef}/>
    )
}

export default forwardRef(DivElement) 