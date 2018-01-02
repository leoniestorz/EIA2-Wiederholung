namespace A5 {
    
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imageData:ImageData;
    
    
    window.addEventListener("load", init);
    
    let snowX: number[] = [];
    let snowY: number[] = [];
    
    let cloudX: number[] = [];
    let cloudY:number[] = [];
    
//    let skiX: number[] = [];
//    let skiY:number[] = [];
    
    let einSkifahrer: Skifahrer;
    let alleSkifahrer:Skifahrer[] = [];
    
    let gondelX: number[] = [];
    let gondelY:number[] = [];
    
    

    
    
    
    
    function init(_event: Event): void {
      
     canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);   
        
    crc2 = canvas.getContext("2d");
    console.log(crc2);
 
        
//Himmel
    
     var grd = crc2.createLinearGradient(0, 0, 0, 300);
     grd.addColorStop(0, "#9999ff");
     grd.addColorStop(0.5, "#9966ff");
     grd.addColorStop(1, "#cc99ff");
     crc2.fillStyle = grd;
     crc2.fillRect(0, 0, 800, 600);
        
        
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

//Lift
   
    drawLift(200,600);

        
        
//Fest platzierte Baeume   
         
        drawTriangle(170, 510, "green");
        drawTriangle(260, 450, "green");
        drawTriangle(400, 420, "green");
        drawTriangle(680, 490, "green");
        
// 10 Baeume an zufälliger Position zwischen 10 und 710 horizontal und 400 und 500 vertikal zufälliger Farbe
        
    for (let i: number = 0; i < 10; i++) {
            let x: number = 10 + Math.random() * 700;
            let y: number = 400 + Math.random() * 100;
            drawTriangle(x, y, "hsl(" + Math.random() * 300 +", 50%, 50%)"); }
 
// 2 feste Wolken an zufälliger Position zwischen 10 und 710 horizontal und 10 und 210 vertikal
        
//    for (let i: number = 0; i < 2; i++) {
//            let x: number = 10 + Math.random() * 700;
//            let y: number = 10 + Math.random() * 200;
//            drawCloud(x, y);}
       
//Zufaellige Startpositionen der animierten Schneeflocken
               
    for (let i: number = 0; i < 100; i++) {
            snowX[i] = Math.random() * canvas.width;
            snowY[i] = Math.random() * canvas.height ;}

//Zufaellige Startpositionen der animierten Wolken
               
    for (let i: number = 0; i < 2; i++) {
            cloudX[i] = Math.random() * 800;
            cloudY[i] = Math.random() * 350 ;}
        
//Startposition der animierten Skifahrer
        
    let ski:Skifahrer = new Skifahrer (500,300);
  

        
        for (let i: number = 0; i < 1; i++) {

                    let s: Skifahrer = new Skifahrer(400, 400); 

                    s.setRandomStyle();

                    alleSkifahrer[i] = s; }

        

        

        
//Startposition der animierten Gondel
        
        for (let i: number = 0; i < 1; i++) {
            gondelX[i] = 200;
            gondelY[i] = 600;}         
        
        
    imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
    
      
     
    animate();

    }

    
   function animate(): void {
       
      console.log("Timeout");
    
      crc2.putImageData(imageData,0,0);
      
      //SCHNEEFLOCKEN
        //Flugrichtung - und geschwindigkeit der Schneeflocken
         
        for (let i: number = 0; i < 100; i++) {
            snowX[i] += Math.random() * 0.5;
            snowY[i] += Math.random() * 1 + 0.5;
 
        //Erscheinen der Schneeflocken am gegenueberliegenden Rand nach Verlassen des Canvas
            
             if (snowX[i] < 0) {
                 snowX[i] = 800; }
           
             if (snowX[i] > 800) {
                 snowX[i] = 0; }
             
             if (snowY[i] > 600) { 
                 snowY[i] = 0; }
            
            
            drawSnowflake(snowX[i], snowY[i]);
        
        }

      //GONDEL       
        //Flugrichtung - und geschwindigkeit der Gondel
         
        for (let i: number = 0; i < 2; i++) {
            gondelX[i] -= Math.random() * 0.25 + 0.8;
            gondelY[i] -= Math.random() * 1.25;
 
        //Erscheinen der Gondel am gegenueberliegenden Rand nach Verlassen des Canvas
            
             if (gondelX[i] < - 20) {
                 gondelX[i] = 200;
                 gondelY[i] = 600; }

            drawGondel(gondelX[i], gondelY[i]);
                 
        }
         
      //WOLKEN         
        //Flugrichtung - und geschwindigkeit der Wolken
         
        for (let i: number = 0; i < 2; i++) {
            cloudX[i] += Math.random() * 1 + 0.5;
            cloudY[i] += Math.random() * 0;
 
        //Erscheinen der Wolken am gegenueberliegenden Rand nach Verlassen des Canvas
           
               if (cloudX[i] > 800) {
                   cloudX[i] = 0; }
            
                drawCloud(cloudX[i], cloudY[i]);
                 
        }


       
      //SKIFAHRER  
       
//       einSkifahrer.update();   
            
                for (let i: number = 0; i < alleSkifahrer.length; i++) {
                  
                    let s: Skifahrer = alleSkifahrer[i];
                    alleSkifahrer[i].update(); }

                    window.setTimeout(animate, 20);
    }
 
    
    
//--------------------------------Funktionen ----------------------------- 

    function drawTriangle(_x: number, _y: number, _color:string): void {
     
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y + 30);
        crc2.lineTo(_x - 20, _y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
}
    
    function drawSnowflake(_x: number, _y: number): void {
        
         
        crc2.beginPath();
        crc2.strokeStyle = "lightgrey";
        crc2.fillStyle = "white";
        crc2.arc(_x - 8 ,_y - 3, 4, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
        
       }
    
     function drawCloud(_x: number, _y: number): void {
        
         
        crc2.beginPath();
        crc2.strokeStyle = "lightgrey";
        crc2.fillStyle = "white";
        crc2.arc(_x + 80 ,_y - 30, 60, 0, 2 * Math.PI);
        crc2.arc(_x + 10 ,_y - 30, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
        
       }
    

    
        function drawGondel(_x: number, _y: number): void {
        
         
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.fillRect(_x,_y,25,25);
        crc2.stroke();
        crc2.fill();
        
       
      }
    
      function drawLift(_x: number, _y: number): void {
        
         
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.moveTo(_x + 0, _y + 0);
        crc2.lineTo(_x - 200, _y - 130);
        crc2.stroke();
       
      }
    

    
    
    
    
    
    
}