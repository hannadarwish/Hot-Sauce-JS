import { createSeeds } from "./scripts/seed.js";
import HotSauce from "./scripts/hotsauce.js";
import RadarChart from "./scripts/radarchart.js";

window.HotSauce = HotSauce;

document.addEventListener("DOMContentLoaded", () => { 

    createSeeds();
    generateSauceImages();
    const hotSauce = HotSauce.hotSauces[5]
    createRadarChart(hotSauce);
// // Event Listeners
// // When you click on one of the hot sauces at the top, it should invoke the displayInfo method
// sauceImg.addEventListener("click", displayInfo);


// Functions

function generateSauceImages() {

    const imgContainer = document.querySelector(".sauce-img-container");

    HotSauce.hotSauces.forEach((hotSauce, i) => {
        const imgElement = document.createElement("img");
        imgElement.src = hotSauce.imageLink;
        imgElement.alt = hotSauce.name;
        imgElement.classList.add("hot-sauce-mini");
        imgElement.id = i;
        imgContainer.appendChild(imgElement);

        // const tooltip = document.createElement("span");
        // tooltip.classList.add("tooltip");
        // tooltip.textContent = hotSauce.name;
        // imgContainer.appendChild(tooltip);
    })
    return imgContainer;
}

// changes what is displayed on the screen (radar graph, main img, description, pairings carousel)
function displayInfo(event) {

}

function createRadarChart(hotSauce) {
    
    const labels = Object.keys(hotSauce.flavorProfile);
    const data = Object.values(hotSauce.flavorProfile);
    const radarChartContainer = document.querySelector(".radar-chart-container");
    const canvas = document.createElement("canvas");
    canvas.id = "radarChart";

    radarChartContainer.appendChild(canvas);

    const radar = new RadarChart(labels, data);
    radar.renderChart("radarChart");
}


});