import React from "react";

function Article({title, date, preview}){
    function availableDate(){
        if (!date){
            return <small>January 1, 1970</small>
        }else{
            return <small>{date}</small>
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            {availableDate()}
            <p>{preview}</p>
        </article>
    )
}

export default Article