namespace A6 {
    
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imageData:ImageData;
    
    
    window.addEventListener("load", init);

     
     let snow: subclassSnow[] = [];
     let wolken: subclassWolke[] = [];
     let skifahrer: superclass[] = [];
     let gondel:subclassGondel[] = [];

    
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

      
// Schleife, die 10 Baeume an zufälliger Position mit zufälliger Farbe platziert
         
  for (let i: number = 0; i < 10; i++) {
            let x: number = 10 + Math.random() * 700;
            let y: number = 400 + Math.random() * 100;
            let c: string = "hsl(" + Math.random() * 300 +", 50%, 50%)";
            
            drawTree(x, y, c); }

        
//Schleife Schneeflocken
               
    for (let i: number = 0; i < 100; i++) {
        
        let sn : subclassSnow = new subclassSnow (Math.random() * canvas.width, Math.random() * canvas.height);
        snow.push(sn);}

//Schleife Wolken
               
    for (let i:number = 0; i < 2; i++) {
            let w:subclassWolke = new subclassWolke (Math.random() * 800, Math.random() * 350);
            wolken.push(w);}   
        
        
//Schleife Skifahrer

    for (let i: number = 0; i < 10; i++) {

            let s: subclassSkifahrer = new subclassSkifahrer(500 + Math.random() * 100, 500 + Math.random() * 200); 
            skifahrer.push(s);}

      
//Schleife Gondel
        
     for (let i: number = 0; i < 1; i++) {
            
            let g:subclassGondel = new subclassGondel(200,600);
            g.drawLift();
            gondel.push(g);
            
     }         
        
        
    imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
    
      
    
    animate();

    }

    
   function animate(): void {
       
      console.log("Timeout");
    
      crc2.putImageData(imageData,0,0);
      
      //SCHNEEFLOCKEN
       
        for (let i: number = 0; i < snow.length; i++) {
            let sn:subclassSnow = snow[i];    
            sn.update();
        
        }

      //GONDEL       
         
        for (let i: number = 0; i < gondel.length; i++) {
            let g: subclassGondel = gondel[i];
            g.update();
     
        }
         
      //WOLKEN         

       for (let i: number = 0; i < wolken.length; i++) {
              let w:subclassWolke = wolken[i];
             w.update(); }

      //SKIFAHRER  

       for (let i: number = 0; i < skifahrer.length; i++) {
                 let s : subclassSkifahrer = skifahrer[i];
                 s.update(); }

     
       window.setTimeout(animate, 20);
    }
 
        function drawTree(_x: number, _y: number, _color:string): void {
     
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y + 30);
        crc2.lineTo(_x - 20, _y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
}
   
}