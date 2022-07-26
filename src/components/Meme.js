import React from "react";
import memesData from "../memesData";
import "../styles/form-styles.css";

export default function Meme() {

    //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="form">
                <div className="form-input">
                    <input 
                        type="text" 
                        placeholder="Top Text"
                        className="form-input-item"
                    />
                    <input 
                        type="text"
                        placeholder="Bottom Text"
                        className="form-input-item"
                    />
                </div>
                <button className="form-button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
                <img 
                    src={meme.randomImage} 
                    alt="Meme" 
                    className="form-image"
                />
            </div>
        </main>
    )
}