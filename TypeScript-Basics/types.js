var isMarried = true;
var age = 30;
var username = "John";
var scores = [21, 36, 55];
var junior = ["Sam", 25];
var JobLocation;
(function (JobLocation) {
    JobLocation[JobLocation["Delhi"] = 0] = "Delhi";
    JobLocation[JobLocation["Mumbai"] = 1] = "Mumbai";
    JobLocation[JobLocation["Bengaluru"] = 2] = "Bengaluru";
})(JobLocation || (JobLocation = {}));
var johnLocation = JobLocation.Bengaluru;
var notSure = 4;
notSure = "I am not sure of the type";
notSure = JobLocation.Bengaluru;
function logMessage() {
    console.log("Hello World!");
}
