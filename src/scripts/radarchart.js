class RadarChart {

    constructor(labels, data) {
        this.labels = labels;
        this.data = data;

        this.chartOptions = {
            scale: {
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 10,
                    stepSize: 2
                }
            }
        };

        this.chartData = {
            labels: this.labels,
            datasets: [{
                data: this.data,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        };
        
        this.renderChart();
    };

    renderChart() {
        const canvas = document.createElement("canvas");
        canvas.id = "radarChart";

        const radarChartContainer = document.querySelector(".radar-chart-container");
        radarChartContainer.appendChild(canvas);

        const ctx = canvas.getContext("2d");
        new Chart(ctx, {
            type: "radar",
            data: this.chartData,
            options: this.chartOptions,
        });
    }

};

export default RadarChart;