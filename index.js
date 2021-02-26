// JS Functionality
// 

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

console.log(alert);