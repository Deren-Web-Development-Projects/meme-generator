import React from "react";
import "../styles/header-footer.css";

export default function Header() {
    return (
        <header id="header">
            <img src="images/troll.png" id="header-image" alt="Troll Icon" />
            <p id="header-title">Meme Generator</p>
            <p id="header-project">React Course - Project 3</p>
        </header>
    )
}