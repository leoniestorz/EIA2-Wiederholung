namespace A5 {
    
    
    
    export class classTree {
       
        x: number;
        y: number;
        color:string;


        constructor(x: number, y: number, color:string) {
            this.x = x;
            this.y = y;
            this.color=color;
        }


        
//        update(): void {
//           this.move();
//            this.draw();
//        }

//        move(): void {
//            this.x += Math.random() * 1 + 0.5;
//            this.y += Math.random() * 0;
//          
//            
//           if (this.x > 800) {
//                   this.x = 0; }
//        }

        draw(): void {
             
         crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x + 20, this.y + 30);
        crc2.lineTo(this.x - 20, this.y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = this.color;
        crc2.fill();

       
        
       
        }
        
        
    }
}