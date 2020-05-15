import React, { useEffect } from "react"

export default function (props) {
    useEffect(() => {
        console.log("Func:hey Function Did Update")
    }, [props.message])
    useEffect(() => {
        console.log("Func:hey Function render")
    })
    useEffect(() => {
        console.log("Func:hey Function DidMount")
    }, [])
    useEffect(() => {
        return () => {
            console.log("Func:hey Function umount")
        }
    })



    return (<div>{props.message}</div>)

}