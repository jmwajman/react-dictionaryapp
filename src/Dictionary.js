import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";

export default function Dictionary(){

let [keyword,setKeyword] = useState("meaning");
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleResponse(response){
    setResults(response.data[0]);
}

function handlePexelResponse(response) {
    setPhotos(response.data.photos);
}

function search(){
let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);

let pexelsApiKey = 
"563492ad6f91700001000001771418af48884418a468ba60c71a590c";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers = {Authorization :`Bearer ${pexelsApiKey}`};
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponse);

}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleKeyword(event){
    setKeyword(event.target.value);
}

function load(){
    setLoaded(true);
    search();
}

if (loaded) {
return(
    
    <div className="Dictionary">
        <section>
        <form onSubmit={handleSubmit}>
            <input type="search"
            autoFocus="on"
            placeholder="Type a word..."
             onChange={handleKeyword}/>
        </form>
        </section>
        <Results results={results}/>
        <Photos photos={photos} />
    </div>
    
);
} else {
    load();
    return "Loading";
}
}