namespace A6 {
    
    
    
    export class subclassWolke extends superclass {
       
       
       


      constructor(_x:number,_y:number) {
           super(_x,_y);
           this.color = "white";
           this.move();
           this.draw();}  
        
   
        
        move(): void {
            this.x += Math.random() * 1 + 0.5;
            this.y += Math.random() * 0;
          
            
           if (this.x > 800) {
                   this.x = 0; }
        }

        draw(): void {
             
        crc2.beginPath();
        crc2.strokeStyle = "lightgrey";
        crc2.fillStyle = this.color;
        crc2.arc(this.x + 80 ,this.y - 30, 60, 0, 2 * Math.PI);
        crc2.arc(this.x + 10 ,this.y - 30, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
        }
        
        
    }
}