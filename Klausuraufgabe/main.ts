namespace Klausuraufgabe {
    
   export let crc2: CanvasRenderingContext2D;
   let canvas: HTMLCanvasElement;
   
    window.addEventListener("load", init);

     
    
    function init(_event: Event): void {
      
      canvas = document.getElementsByTagName("canvas")[0];
      console.log(canvas);   
        
      crc2 = canvas.getContext("2d");
      console.log(crc2);}












}