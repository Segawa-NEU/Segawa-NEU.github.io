var ctx = document.getElementById("framework-skills").getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ["Ruby on Rails", "Material Design Lite", "Boostrap"],
    datasets: [{
        data: [7.4, 6.3, 5.7],
        backgroundColor: [
            'rgba(255, 224, 130, 0.2)',
            'rgba(255, 224, 130, 0.2)',
            'rgba(255, 224, 130, 0.2)',
            'rgba(255, 224, 130, 0.2)',
            'rgba(255, 224, 130, 0.2)',
            'rgba(255, 224, 130, 0.2)',
            'rgba(255, 224, 130, 0.2)',
            'rgba(255, 224, 130, 0.2)',
            'rgba(255, 224, 130, 0.2)'
        ],
        borderColor: [
            'rgba(255, 202, 40, 1)',
            'rgba(255, 202, 40, 1)',
            'rgba(255, 202, 40, 1)',
            'rgba(255, 202, 40, 1)',
            'rgba(255, 202, 40, 1)',
            'rgba(255, 202, 40, 1)',
            'rgba(255, 202, 40, 1)',
            'rgba(255, 202, 40, 1)',
            'rgba(255, 202, 40, 1)'
        ],
        borderWidth: 0.5
    }]
},
options: {
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            },
            gridLines: {
                display: false,
                offsetGridLines: false
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            }
        }]
    }
}});
