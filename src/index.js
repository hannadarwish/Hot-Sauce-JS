import { createSeeds } from "./scripts/seed.js";
import HotSauce from "./scripts/hotsauce.js";
import RadarChart from "./scripts/radarchart.js";
import { populatePairingsCarousel } from "./scripts/pairings.js";

window.HotSauce = HotSauce;
let currentChart = null; // track the current chart

document.addEventListener("DOMContentLoaded", () => { 

    createSeeds();
    generateSauceImages();

    function generateSauceImages() {
        const imgContainer = document.querySelector(".sauce-img-container");

        HotSauce.hotSauces.forEach((hotSauce, i) => {
            const imgElement = document.createElement("img");
            imgElement.src = hotSauce.imageLink;
            imgElement.alt = hotSauce.name;
            imgElement.classList.add("hot-sauce-mini");
            imgElement.id = i;
            imgContainer.appendChild(imgElement);
        })

        imgContainer.addEventListener("click", handleHotSauceClick);
        return imgContainer;
    }

    function handleHotSauceClick(event) {
        const hotSauceId = event.target.id;
        const hotSauce = HotSauce.hotSauces[hotSauceId];

        createRadarChart(hotSauce);
        showImg(hotSauce);
        populateDescription(hotSauce);
        populatePairingsCarousel(hotSauce);
    }

    function createRadarChart(hotSauce) {
        
        const labels = Object.keys(hotSauce.flavorProfile);
        const data = Object.values(hotSauce.flavorProfile);
        const name = hotSauce.name;
        const radarChartContainer = document.querySelector(".radar-chart-container");
        const canvas = document.createElement("canvas");
        canvas.id = "radarChart";
        
        radarChartContainer.innerHTML = ""; //clears the container before adding new chart
        radarChartContainer.appendChild(canvas);

        const ctx = canvas.getContext("2d");
        const radarChart = new RadarChart(labels, data, name);

        new Chart(ctx, {
            type: "radar",
            data: radarChart.chartData,
            options: radarChart.chartOptions,
        });

        currentChart = radarChart;
    }

    function populateDescription(hotSauce) {
        const descriptionBox = document.querySelector(".description-box");
        descriptionBox.textContent = hotSauce.description;

        if (hotSauce) {
            descriptionBox.classList.remove("is-hidden");
        } else {
            descriptionBox.classList.add("is-hidden");
        }
    }

    function showImg(hotSauce) {
        const mainImgBox = document.querySelector(".main-sauce-img-container");
        const imgElement = document.createElement("img");
        imgElement.src = hotSauce.imageLink;
        imgElement.alt = hotSauce.name;
        imgElement.classList.add("hot-sauce-main");

        mainImgBox.innerHTML = "";

        mainImgBox.appendChild(imgElement);
    }

});