window.addEventListener("load", init);

function init(): void {
    
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);
    


//Himmel
    crc2.fillStyle = "#00ffff";
    crc2.fillRect(0, 0, 800, 700);

//    crc2.beginPath();
//    crc2.moveTo(0, 0);
//    crc2.lineTo(400, 300);
//    crc2.stroke();
    
//Baeume
    
 
    crc2.beginPath();
    crc2.moveTo(120, 90);
    crc2.lineTo(150, 120);
    crc2.lineTo(130,120);
    crc2.lineTo(170,160);
    crc2.lineTo(140,160);
    crc2.lineTo(180,200);
    crc2.lineTo(120,200);
    crc2.lineTo(90,200);
    crc2.lineTo(120,160);
    crc2.lineTo(90,160);
    crc2.lineTo(120,120);
    crc2.lineTo(100,120);
    crc2.closePath();
    crc2.fillStyle = "green";
    crc2.fill();

//    crc2.beginPath();
//    crc2.arc(200, 50, 40, 0, 2 * Math.PI);
//    crc2.fillStyle = "pink";
//    crc2.fill();
    
//    crc2.beginPath();
//    crc2.arc(50, 350, 170, 0, 2 * Math.PI);
//    crc2.fillStyle = "#00ff00";
//    crc2.fill();
    
// Pisten vorne   
    crc2.beginPath();
    crc2.strokeStyle = "lightgrey";
    crc2.arc(300, 1750, 1350, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fillStyle = "white";
    crc2.fill();
    
    crc2.beginPath();
    crc2.strokeStyle = "lightgrey";
    crc2.arc(900, 1600, 1200, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fillStyle = "white";
    crc2.fill();
    
 
}

