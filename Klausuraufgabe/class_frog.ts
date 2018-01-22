namespace Klausuraufgabe {
    

 export class classFrog extends classFly {

     size : number;
     
     
     update () : void {
         
     this.draw();}


   draw(): void {
       
   crc2.beginPath();
   crc2.strokeStyle = "black";
   crc2.fillStyle = "yellow";
   crc2.arc(this.x + 80 ,this.y - 30, this.size, 0, 2 * Math.PI);
   crc2.stroke(); 
   crc2.fill();
   crc2.closePath();
   
   
   }
     
     
  check(): void {
      
  
  
  
  }

}
}