let isMarried:boolean = true;

let age:number = 30;

let username:string = "John";

let scores:number[] = [21,36,55];

let junior:[string,number] = ["Sam",25];

enum JobLocation {Delhi,Mumbai,Bengaluru}

let johnLocation:JobLocation = JobLocation.Bengaluru;

let notSure:any = 4;
notSure = "I am not sure of the type";
notSure = JobLocation.Bengaluru;

function logMessage():void{
    console.log("Hello World!");
}
