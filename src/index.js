import { createSeeds } from "./scripts/seed.js" 

document.addEventListener("DOMContentLoaded", () => { 
    const text = document.querySelector(".title");
    const button = document.querySelector(".button");

    createSeeds();

});