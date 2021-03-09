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

//////////////
//LINE GRAPH//
//////////////

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
        backgroundColor:'#5C526B',
        borderWidth: 2,
        }],

};

//Line Graph Style options
let trafficOptions = {
    aspectRatio: 2.5,
    animation: { 
        duration: 0
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

//Creates Line Graph
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
    });

/////////////
//BAR GRAPH//
/////////////

const dailyCanvas = document.getElementById("daily-chart");
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: [
        '#393047',
        '#5C526B',
        '#7C718B',
        '#9C91AD',
        '#BFB3CF',
        '#E2D6F3',
        '#393047',

    ],
    borderWidth: 1
    }]
    };

//Bar Graph Style options
const dailyOptions = {
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
}

//Creates Bar Graph
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });


//////////////////
//DOUGHNUT CHART//
//////////////////

const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#5C526B',
    '#00C2FC',
    '#BF94FF'
    ]
    }]
    };

//Doughnut Chart Style options
const mobileOptions = {
        legend: {
            position: 'right',
            labels: {
            boxWidth: 20,
            fontStyle: 'bold'
            }
        }
    }

//Creates Doughnut Chart
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });

///////////////////
/////Messaging/////
///////////////////

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });