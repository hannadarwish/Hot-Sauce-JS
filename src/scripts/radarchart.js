class RadarChart {

    constructor(labels, data, name) {
        this.labels = labels;
        this.data = data;
        this.name = name;

        this.chartOptions = {
            scale: {
                pointLabels: {
                    color: 'black',
                },
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 10,
                    stepSize: 3,
                    color: 'black',
                    backgroundColor: "transparent",
                },
            },
        };

        this.chartData = {
            labels: this.labels,
            datasets: [{
                label: this.name,
                data: this.data,
                fill: true,
                backgroundColor: 'rgba(255, 99, 71, 0.6)',
                borderColor: 'rgb(242, 88, 11)',
                pointBackgroundColor: 'rgb(242, 88, 11)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)',
            }],
        };
        
    };

};

export default RadarChart;