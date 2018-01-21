namespace RandomBoxes {

    window.addEventListener("load", init);
    
    function init () : void {
      
        var menge : string = prompt ("Geben Sie eine Zahl zwischen 10 und 100 ein");
        var mengeNummer : number = parseInt(menge); 
        
        
        
        
        if (mengeNummer >= 10 && mengeNummer <= 100) {
        
          for (var i:number = 0; i < mengeNummer; i++){
              
              draw(Math.random() * 1920,Math.random() * 1080,40,40,"hsl(" + Math.random() * 360 + ", 100%, 50%)")}
        
        }
        
        else {
        
        alert("Versuchen Sie es erneut");
        init();}
    }
    
    function draw (_x:number, _y:number,_height:number, _width:number, _color:string) : void {
        
       let div: HTMLElement = document.createElement("div");
       div.style.width = _width + "px";
       div.style.height = _height + "px";    
       div.style.left = _x + "px";
       div.style.top = _y + "px"; 
       div.style.backgroundColor =  _color;
       div.style.position = "absolute";

    
       document.body.appendChild(div);

      
    }
}