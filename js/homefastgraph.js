const fastCtx = document.getElementById('fastStockChart').getContext('2d');
const fastStockChart = new Chart(fastCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Share',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.25)',
            borderWidth: 2,
            pointRadius: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: 'rgba(54, 162, 235, 1)',
            data: [],
            fill: true
        }]
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
                    max: 1200,
                    stepSize: 50,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Price'
                },
                gridLines: {
                    color: 'rgba(0, 0, 0, 0.1)',
                }
            }]
        }
    }
});

let startTime = Date.now();
const data=()=>{

}
function updateFastChart() {
    const elapsedTimeInSeconds = (Date.now() - startTime) / 1000;
    const labels = fastStockChart.data.labels;
    const data = fastStockChart.data.datasets[0].data;

    // Add a new data point
    labels.push(elapsedTimeInSeconds);
    data.push(800 + Math.random() * 400);

    // Remove the first data point if the length exceeds 20
    if (labels.length > 20) {
        labels.shift();
        data.shift();
    }
    fastStockChart.update();
}

setInterval(updateFastChart, 300);