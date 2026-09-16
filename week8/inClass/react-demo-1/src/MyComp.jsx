import react from "react";

function MyComp({ width, height, bgColor }) {
    return(
        <>
            <div style = {{width, height, backgroundColor: bgColor}}>Rectangle</div>
        </>
    )
}


export default MyComp;
