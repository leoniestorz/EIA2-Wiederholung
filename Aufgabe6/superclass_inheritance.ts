namespace A6 {
    
    
    
    export class superclass {
       
        x: number;
        y: number;
        color:string;
      

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
            
        }

 
        update(): void {
            this.move();
            this.draw();
        }

        
        move(): void {}

        
        draw(): void {}

    }
}