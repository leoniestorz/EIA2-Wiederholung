namespace Klausuraufgabe {
   
    
    export class classFly {
    
        x:number;
        y:number;


    constructor (_x:number,_y:number) {
       this.x = _x;
       this.y = _y; 
    };

    update () : void {
          
        
        this.draw();
        this.move();

    };


   move () : void {
       
   
        this.x += Math.random() * 10 - 7;
        this.y += Math.random() * 5 - 2;
        
        if (this.x > 800) 
           { this.x = 0} 
        if (this.x < 0) 
           { this.x = 800}  
            
        if (this.y > 400) 
           { this.y = 0} 
        if (this.y < 0) 
           { this.y = 400} 
   
   
   
   
   
   }

   draw (): void {
       
   crc2.beginPath();
   crc2.strokeStyle = "black";
   crc2.fillStyle = "green"
   crc2.arc(this.x + 80 ,this.y - 30, 26, 0, 2 * Math.PI);
   crc2.stroke(); 
   crc2.fill();
   crc2.closePath();
             
   };



}
}