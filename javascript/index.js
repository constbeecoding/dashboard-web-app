// JavaScript Functionality

/////////////////////
//NOTIFICATION MOON//
/////////////////////

const notificationMoon = document.getElementById("notifications");
notificationMoon.innerHTML = `
<div class="drop-down">
  
  <ul id="myDropdown" class="dropdown-content">
    <li>Andromeda has commented on your post. <span class="notification-close"> x </span></li>
    <li>New Data added to Traffic Chart. <span class="notification-close"> x </span></li>
    <li>Cygnus A liked your post. <span class="notification-close"> x </span></li>
  </div>
</div>
`
notificationMoon.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("notification-close")) {
        notificationMoon.style.display ="none"
    }

});

const moonSVG = document.querySelector(".moon-svg");
moonSVG.addEventListener('click', e => {
    notificationMoon.style.display ="flex";
});
// // function dropDown() {
// //     document.querySelector("moon-svg").classList.toggle("show");
// //   }
// function dropDown() {
//     document.querySelector("moon-svg").classList.toggle("show");
//   }


/////////////////////
////ALERT BANNER/////
/////////////////////

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
        alertBanner.style.display ="none"
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
        "25-31"
    ],

    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor:'rgba(92, 82, 107, .5)',
        borderWidth: 2,
        pointStyle: 'star',
        pointRadius: '12',
        pointBackgroundColor: '#fff',
        pointBorderColor: 'gold',
        }],

};

let trafficDataMonth = {
    labels: [
        "Jan", 
        "Feb", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July",
        "Aug", 
        "Sept", 
        "Oct", 
        "Nov",
        "Dec"
    ],

    datasets: [{
        data: [17600, 10000, 9000, 8050, 8264, 7234, 8165, 9652, 7120, 6093,
        7124, 8234],
        backgroundColor:'rgba(92, 82, 107, .5)',
        borderWidth: 2,
        pointStyle: 'star',
        pointRadius: '12',
        pointBackgroundColor: '#fff',
        pointBorderColor: 'gold',
        }],

};

let trafficDataDay= {
    labels: [
        "16", 
        "17", 
        "18", 
        "19", 
        "20", 
        "21", 
        "22",
        "23", 
        "24", 
        "25", 
        "26"],

    datasets: [{
        data: [1250, 750, 2000, 1000, 1750, 1500, 1850, 1200, 1500, 2250,
        1275],
        backgroundColor:'rgba(92, 82, 107, .5)',
        borderWidth: 2,
        pointStyle: 'star',
        pointRadius: '12',
        pointBackgroundColor: '#fff',
        pointBorderColor: 'gold',
        }],

};

//Line Graph Style options
let trafficOptions = {
    aspectRatio: 2.5,
    animation: { 
        duration: 1000,
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

//Line Graph Click Event - CHANGE GRAPH ON CLICK
const week = document.getElementById("week");
const month = document.getElementById("month");
const day = document.getElementById("day");

week.addEventListener('click', () => {
    trafficChart.data = trafficData
    trafficChart.update();
    });

month.addEventListener('click', () => {
    trafficChart.data = trafficDataMonth;
        trafficChart.update();
    });


day.addEventListener('click', () => {
    trafficChart.data = trafficDataDay;
        trafficChart.update();
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


function filter() {
    
    let input, ul, li, a, i;
        input = document.getElementById("userID");
        filterValue = input.value.toUpperCase();
        ul = document.getElementById("gallery");
        li = ul.getElementsByTagName("li");
        
        for (i = 0 ; i < li.length ; i++){
            a = li[i].getElementsByTagName("a")[0];

            if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
                li[i].style.display = "";
                
            } else {
                li[i].style.display = "none";
            }
        }
    }
//LOCAL STORAGE

//If save is clicked, save settings to local storage.



    