import React from 'react'

export default function Footer(props) {
    return (
        <div>

            <div className="Footer" style={{ backgroundColor: "#212529", zIndex: "-1", bottom: 0, width: "100%", position: "fixed", borderTop: "2px solid red", height: "7%" }}>
                
                <p className='my-2' style={{textAlign:"center" , position:"relative", color: props.mode==="light" ? "white" : "#0d6efd"}}>© {props.title}-LTD 2023 All Rights Reserved. </p>
                
            </div>
        </div>
    )
}
