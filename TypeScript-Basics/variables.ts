function varTest():void{
    var x:number = 10;
    var status:boolean = true;

    if(status){
        var x:number = 11;
        console.log(x)
    }

    console.log(x);
}

varTest();

function letTest():void{
    let x:number = 20;
    if(true){
        let x:string = "Hello";
        console.log(x)
    }
    console.log(x);
}

letTest();

const directions:number = 4;
console.log(directions);