import React from "react";
import memesData from "../memesData";
import "../styles/form-styles.css";

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
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
                    src={memeImage} 
                    alt="Meme" 
                    className="form-image"
                />
            </div>
        </main>
    )
}