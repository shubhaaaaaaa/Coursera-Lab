import ReactPlayer from "react-player";
import React from "react";

function AddAssets(){
    return(
        <div>
            <p style={{fontSize: "30px", textTransform: "uppercase", color: 'blue'}} className='text-3xl font-bold flex items-center justify-center'>Video Player</p>
            <br/>  
            <p className='text-sm pl-4 pb-4'>I embedded a video from YouTube using ReactPlayer npm package.</p>    
            <MyVideo /> 
        </div>
    );
}

function MyVideo(){
    return (
        <div className="flex items-center justify-center">
        <ReactPlayer  url="https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1" width="90%"/>
        </div>
    );
}

export default AddAssets;