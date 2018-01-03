namespace A5 {
    
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imageData:ImageData;
    
    
    window.addEventListener("load", init);
    
    let allSnow: classSnow[] = [];
    let alleWolken:classWolke[] = [];
    let alleSkifahrer:classSkifahrer[] = [];
    let Gondel: classGondel []= [];
    let allTrees:classTree[] = [];
    
    
    

    
    
    
    
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

      
//Fest platzierter Baum 
         
        let tree:classTree = new classTree (300,500, "green")
        tree.draw();

        
// Schleife, die 10 Baeume an zufälliger Position mit zufälliger Farbe platziert
        
    for (let i: number = 0; i < 10; i++) {
         let t:classTree = new classTree(10 + Math.random() * 700, 400 + Math.random() * 100, "hsl(" + Math.random() * 300 +", 50%, 50%)");
         allTrees[i] = t;
         allTrees[i].draw();
         
    }
 
       
//Schleife Schneeflocken
               
    for (let i: number = 0; i < 100; i++) {
        let snow:classSnow = new classSnow (Math.random() * canvas.width, Math.random() * canvas.height);
         allSnow[i] = snow;}

//Schleife Wolken
               
    for (let i:number = 0; i < 3; i++) {
            let w:classWolke = new classWolke(Math.random() * 800, Math.random() * 350,"white");
            alleWolken[i] = w;}   
        
        
//Schleife Skifahrer

    for (let i: number = 0; i < 10; i++) {

            let s: classSkifahrer = new classSkifahrer(500 + Math.random() * 100, 500 + Math.random() * 200,"hsl(" + Math.random() * 360 + ", 100%, 50%)"); 
            alleSkifahrer[i] = s;}

      
//Schleife Gondel
        
     for (let i: number = 0; i < 1; i++) {
            
            let g:classGondel = new classGondel(200,600);
            g.drawLift();
            Gondel[i] = g;
            
     }         
        
        
    imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
    
      
    
    animate();

    }

    
   function animate(): void {
       
      console.log("Timeout");
    
      crc2.putImageData(imageData,0,0);
      
      //SCHNEEFLOCKEN
      
         
        for (let i: number = 0; i < allSnow.length; i++) {
                allSnow[i].update();
        
        }

      //GONDEL       
       
         
        for (let i: number = 0; i < Gondel.length; i++) {
            
            Gondel[i].update();
           
 
        
        }
         
      //WOLKEN         

       for (let i: number = 0; i < alleWolken.length; i++) {
                  
                    alleWolken[i].update(); }


       
      //SKIFAHRER  

      for (let i: number = 0; i < alleSkifahrer.length; i++) {
                 
                   alleSkifahrer[i].update(); }

     
       window.setTimeout(animate, 20);
    }
 



    


    
      
    

    
    
    
    
    
    
}