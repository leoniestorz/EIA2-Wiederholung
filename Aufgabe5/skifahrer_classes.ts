namespace A5 {
    
    
    
    export class classSkifahrer {
       
        x: number;
        y: number;
        color:string;

        constructor(x: number, y: number, color:string) {
            this.x = x;
            this.y = y;
            this.color = color;
        }


        
        update(): void {
            this.move();
            this.draw();
        }

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