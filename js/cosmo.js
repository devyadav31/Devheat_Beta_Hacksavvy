const liveCtx = document.getElementById('liveStockChart').getContext('2d');
const liveStockChart = new Chart(liveCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Stock Price 1',
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                pointRadius: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: 'rgba(54, 162, 235, 1)',
                data: [],
                fill: true
            },
            {
                label: 'Stock Price 2',
                borderColor: 'rgb(255, 99, 132)', // Different color
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                pointRadius: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: 'rgba(255, 99, 132, 1)',
                data: [],
                fill: true
            }
        ]
    },
    options: {
        responsive: false,
        width: 600,
        height: 300,
        animation: {
            duration: 200, // Add a subtle animation
        },
        scales: {
            x: [{
                type: 'linear',
                position: 'bottom',
                ticks: {
                    max: 10,
                    stepSize: 1,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Seconds'
                },
                gridLines: {
                    display: false,
                }
            }],
            y: [{
                ticks: {
                    min: 800,
                    max: 900,
                    stepSize: 20,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Price (INR)'
                },
                gridLines: {
                    color: 'rgba(0, 0, 0, 0.1)',
                }
            }]
        }
    }
});

let elapsedTime = 0;

function updateLiveChart() {
    const labels = Array.from({ length: 10 }, (_, index) => elapsedTime + index);
    
    // Simulated stock prices for dataset 1 within the range of 800 to 900
    const stockValues1 = labels.map(() => 800 + Math.random() * 100);
    
    // Simulated stock prices for dataset 2 within the range of 800 to 900
    const stockValues2 = labels.map(() => 800 + Math.random() * 100);

    liveStockChart.data.labels = labels;
    liveStockChart.data.datasets[0].data = stockValues1;
    liveStockChart.data.datasets[1].data = stockValues2;

    liveStockChart.update();
    elapsedTime += 1; // Increase elapsed time by 1 second
}

setInterval(updateLiveChart, 1000);  

