// JavaScript Functionality

//ALERT BANNER

const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = `
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>7</strong> overdue tasks. </p>
<p class="alert-banner-close"> x </p>
</div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")) {
        alert.style.display ="none"
    }

});

//LINE GRAPH
let trafficCanvas = document.getElementById("traffic-chart");
let trafficData = {
    labels: [
        "16-22", 
        "23-29", 
        "30-5", 
        "6-12", 
        "13-19", 
        "20-26", 
        "27-3",
        "4-10", 
        "11-17", 
        "18-24", 
        "25-31"],

    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: '#443C4E',
        borderWidth: 2,
        }],

};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: { duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    };

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
    });
