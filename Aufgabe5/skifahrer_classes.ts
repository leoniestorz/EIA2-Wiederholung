namespace A5 {
    
    
    
    export class Skifahrer {
       
        x: number;
        y: number;
        positionX:number;
        positionY:number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }


        
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += Math.random() * 0.5 - 3;
            this.y += Math.random() * 0.5 + 1; 
            
            if (this.y >= 650) {
                 this.y = 500;
                 this.x = 700; }
        }

        draw(): void {
             
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.arc(this.x + 80 ,this.y - 30, 6, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
        
       
        }
        
        setPosition(): void {
            this.positionX = 500 + Math.random() * 100;
            this.positionY = 500 + Math.random() * 200;
            }

        setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
}