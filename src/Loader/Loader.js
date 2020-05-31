import React from "react"
import "../Loader/Loader.css"

const Loader = (props) => {

    return props.load ? <div style={{ 'z-index': '1000', top: '0px', position: "fixed", height: '100%', width: '100%', backgroundColor: 'rgb(2, 2, 2,0.4)' }}><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> </div> : ''


}

export default Loader