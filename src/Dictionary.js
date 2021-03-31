import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){

let [keyword,setKeyword] = useState("");
let [results, setResults] = useState({});

function handleResponse(response){
    console.log(response.data[0]);
    setResults(response.data[0]);
}


function search(event){
event.preventDefault();


let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);
}


function handleKeyword(event){
    setKeyword(event.target.value);
}

return(
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search"
            autoFocus="on"
            placeholder="Type a word..."
             onChange={handleKeyword}/>
        </form>
        <Results results={results}/>
    </div>
);
}