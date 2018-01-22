namespace Klausuraufgabe {
    
   export let crc2: CanvasRenderingContext2D;
   let canvas: HTMLCanvasElement;
   let imageData:ImageData;
   
    window.addEventListener("load", init);
   
    let allFlies:classFly[]=[];
    let allFrogs:classFrog[]=[];
  
    
    function init(_event: Event): void {
      
      canvas = document.getElementsByTagName("canvas")[0];
      console.log(canvas);   
        
      crc2 = canvas.getContext("2d");
      console.log(crc2);
        
        
        for (let i:number = 0; i < 2; i++){
          
      let Frog:classFrog = new classFrog(Math.random() * canvas.width, Math.random() * canvas.height);
        
          console.log(allFrogs);
          
          allFrogs[i] = Frog;
          console.log("Frosch wurde im Array gespeichert");
            allFrogs[i].draw();
            
  

}
        
        
      for (let i:number = 0; i < 5; i++){
          
      let Fly:classFly = new classFly(Math.random() * canvas.width, Math.random() * canvas.height);
        
          console.log(allFlies);
          
          allFlies[i] = Fly;
          console.log("Fliege wurde im Array gespeichert");
  

}
        
      imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
      animate();
       

      
    }



    function animate():void {
        
      console.log("Timeout");
      crc2.putImageData(imageData,0,0);
        
        for (let i: number = 0; i < allFlies.length; i++) {
                allFlies[i].update();
                
        
        }
     
        window.setTimeout(animate, 20);
    }








}