namespace A6 {
    
    
    
    export class subclassSkifahrer extends superclass {
       
        
     
     
    constructor(_x:number,_y:number) {
        
           super(_x,_y);
           this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)" }
     
        move(): void {
            this.x += Math.random() * 0.5 - 3;
            this.y += Math.random() * 1 + 0.25; 
            
            if (this.y >= 650) {
                 this.y = 480 + Math.random() * 100;
                 this.x = 650 + Math.random() * 100; }
        }

        draw(): void {
             
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.arc(this.x + 80 ,this.y - 30, 6, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
        
       
        }



    }
}