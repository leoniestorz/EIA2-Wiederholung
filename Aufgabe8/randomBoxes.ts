namespace RandomBoxes {

     window.addEventListener("load", init);
    
    function init () : void {
      
        var menge:number;   
        alert ("Geben Sie eine Zahl zwischen 10 und 100 ein")
        
        if (menge > 10 && menge < 100) {
            
        drawBox(100,100,"red",20,20);
        
        }
        
        else alert("Versuchen SIe es erneut")
    }
    
    function drawBox (_x: number, _y: number, _color: string, _width:number,_height:number) : void {
        
    let box: HTMLDivElement = document.createElement("div");
        
    box.style.color = _color;
    box.style.width = _width + "px";
    box.style.height = _height + "px";
    box.style.marginLeft = _x + "px";
    box.style.marginTop = _y + "px";  
    
    document.body.appendChild(box);
      
    }
}