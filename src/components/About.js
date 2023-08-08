import React from "react";

function About({image, about}){
    function availableImage(){
        if (!image){
            return <img src={"https://via.placeholder.com/215"} alt="blog logo"></img>
        }else{
            return <img src={image} alt="blog logo"></img>
        }
    }
    return (
        <aside>
            {availableImage()}
            <p>{about}</p>
        </aside>
    )
}

export default About