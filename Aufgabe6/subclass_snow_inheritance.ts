namespace A6 {
    
    
    
    export class subclassSnow extends superclass {
       
        
       
       
        constructor(_x:number, _y:number) {
           
           super(_x,_y); 
           this.color = "white";
           
          
        }

        move(): void {
            this.x += Math.random() * 0.5;
            this.y += Math.random() * 1 + 0.5;
          
            
           if (this.x < 0) {
                 this.x = 800; }
           
             if (this.x > 800) {
                 this.x = 0; }
             
             if (this.y > 600) { 
                 this.y = 0; }
        }

        draw(): void {
             
        crc2.beginPath();
        crc2.strokeStyle = "lightgrey";
        crc2.fillStyle = this.color;
        crc2.arc(this.x - 8 ,this.y - 3, 4, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
        
    
       
        }
        
        
    }
}