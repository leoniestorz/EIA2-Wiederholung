namespace A6 {
    
    
    
    export class subclassGondel extends superclass {
       
        
        
          constructor(_x:number,_y:number) {
           super(_x,_y);
           this.color = "black";
           this.drawLift(); }

       
        
        move(): void {
            
            this.y -= 0.7;
            this.x -= 1.0586;
          
            
          if (this.x < - 20) {
                 this.x = 200;
                 this.y = 600; }
        }

        
        draw(): void {
         
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = this.color;
        crc2.fillRect(this.x,this.y,25,25);
        crc2.stroke();
        crc2.fill();
        
        }
        
        drawLift(): void {
        
         
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.moveTo(this.x + 0, this.y + 0);
        crc2.lineTo(this.x - 200, this.y - 130);
        crc2.stroke();
       
      }
        
        
    }
}