
export function populateBarChart() {
    const labels = ["The Classic - Chili Maple", "Curry Verde", "Zesty Lemon Pepper", "Chicho-Ghost", "Los Calientes Rojo", "Mako Snake", "Jalapeño Chico", "Da Bomb Evolution", "Watermelon Ghost", "The Last Dab: Apollo"]
    const data = {
        labels: labels,
        datasets: [{
            label: 'Hot Sauces Ranked by Scovilles',
            data: [1600, 6000, 15500, 36500, 49000, 71000, 103000, 135000, 641000, 700000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 205, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(201, 203, 207, 0.7)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 3
        }]
    };

    const ctx = document.getElementById('bar-chart');

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'black', // Set label text color to black
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'black', // Set y-axis label color to black
                    }
                },
                x: {
                    ticks: {
                        color: 'black', // Set x-axis label color to black
                    }
                }
            }
        },
    })
}
