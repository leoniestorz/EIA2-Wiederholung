namespace Klausuraufgabe {
    
   export let crc2: CanvasRenderingContext2D;
   let canvas: HTMLCanvasElement;
   
    window.addEventListener("load", init);
   
    let allFlies:classFly[]=[];
    let imageData:ImageData;
    
    function init(_event: Event): void {
      
      canvas = document.getElementsByTagName("canvas")[0];
      console.log(canvas);   
        
      crc2 = canvas.getContext("2d");
      console.log(crc2);
        
    
        
      for (let i:number = 0; i < 5; i++){
          
      let Fly:classFly = new classFly(Math.random() * canvas.width, Math.random() * canvas.height);
        
          console.log(allFlies);
          
          allFlies[i] = Fly;
          console.log("Fliege wurde im Array gespeichert");
          
          allFlies[i].draw();   
          console.log("Fliege wird gezeichnet");  

}
        
      imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
//      animate();
      
    }



//    function animate():void {
//        
//      console.log("Aufruf animate"); 
//      crc2.putImageData(imageData,0,0);
//        
//        for (let i: number = 0; i < allFlies.length; i++) {
//                allFlies[i].draw();
//                
//        
//        }
//    window.setTimeout(animate, 20);
//    }








}