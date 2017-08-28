var ctx = document.getElementById("programming-language-skills").getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ["Java", "HTML", "CSS", "SQL", "Racket", "Ruby", "C++", "C", "JavaScript", "Python", "VB.NET"],
    datasets: [{
        data: [9.4, 9.2, 9.1, 8.7, 8.2, 7.1, 6.4, 5.6, 5.1, 4.5, 4.1],
        backgroundColor: [
            'rgba(255, 224, 130, 0.2)',
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
