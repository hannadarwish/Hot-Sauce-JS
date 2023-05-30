class RadarChart {

    constructor(labels, data, name) {
        this.labels = labels;
        this.data = data;
        this.name = name;

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
                label: this.name,
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
        
    };

};

export default RadarChart;