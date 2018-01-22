namespace Klausuraufgabe {
   
    
    export class classFrog {
    
        x:number;
        y:number;


    constructor (_x:number,_y:number) {
       this.x = _x;
       this.y = _y; 
    };

    update () : void {
          
        
        this.draw();
//        this.move();

    };


//   move () : void {}

   draw (): void {
       
  crc2.beginPath();
   crc2.strokeStyle = "black";
   crc2.fillStyle = "yellow"
   crc2.arc(this.x + 80 ,this.y - 30, 26, 0, 2 * Math.PI);
   crc2.stroke(); 
   crc2.fill();
   crc2.closePath();
             
   };



}
}
 