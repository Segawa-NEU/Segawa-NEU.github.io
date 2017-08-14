var ctx = document.getElementById("language-skills").getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ["English", "Japanese", "Portuguese", "German"],
    datasets: [{
        data: [10.0, 10.0, 8.9, 3.2],
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
