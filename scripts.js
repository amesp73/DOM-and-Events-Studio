// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let status = this.document.getElementById("flightStatus");

    let upButton = this.document.getElementById("up");
    let downButton = this.document.getElementById("down");
    let rightButton = this.document.getElementById("right");
    let leftButton = this.document.getElementById("left");
    
    let takeoff = this.document.getElementById("takeoff");
    let landing = this.document.getElementById("landing");
    let missionAbort = this.document.getElementById("missionAbort");

    takeoff.addEventListener("click", function() {
       let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
       if (response) {
           status.innerHTML = "Shuttle in flight";
       } else {

       }
    });

    upButton.addEventListener("click", function() {
        prompt("It's working");
    })
})