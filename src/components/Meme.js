import React from "react";
import "../styles/form-styles.css";

export default function Meme() {
    return (
        <main>
            <form className="form">
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
                <button className="form-button">
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}