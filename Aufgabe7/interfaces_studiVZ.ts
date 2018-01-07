namespace StudiVZ {
    interface StudentData {
        
        matrikel:number;
        nachname:string;
        name:string;
        alter:number;
        geschlecht:boolean;
        kommentar:string;
    }
    
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 = männlich oder 1 = weiblich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
       
      let InputArray: string[] = _input.split(",");  
       
    
              
//Angabe des Geschlechts - Zahlen als männlich/weiblich festlegen
                
       let geschlechtEingabe: string;
        
       if (parseInt(InputArray[4]) == 0) 
       
            {geschlechtEingabe = "maennlich";} // 0 = männlich
       
       else {geschlechtEingabe = "weiblich";} // 1 = weiblich
        
        
//Wenn falsche Eingaben gemacht werden ...  
              
       if(parseInt(InputArray[0]) == NaN){
        return "Fehler: Matrikel als Zahl eingeben"};
//        
//        if (InputArray[1] != ""){
//           return "Fehler: Name mit Buchstaben eingeben"};
//        
//        if (InputArray[2] != ""){
//           return "Fehler: Nachname mit Buchstaben eingeben"};
        
         if (parseInt(InputArray[3]) == NaN){
           return "Fehler: Alter als Zahl eingeben"};
        
         if (parseInt(InputArray[4]) != 0 && parseInt(InputArray[4]) != 1){
           return "Fehler: Bitte als Geschlecht 0 oder 1 angeben"};
        
//        if (InputArray[5] != ""){
//           return "Fehler: Kommentar mit Buchstaben eingeben"};
        
         let studi : StudentData = {
            
            matrikel : parseInt(InputArray[0]),
            name : InputArray[1],
            nachname : InputArray [2],
            alter : parseInt(InputArray[3]), 
            geschlecht : parseInt(InputArray[4]) == 0,
            kommentar : InputArray [5],}

//Objekt studi im Array students abspeichern
        
       students.push(studi);
        
        
        return "Ihre Daten wurden gespeichert: \n\nMatrikel:"+ studi.matrikel + "\nVorname:" + studi.name + "\nName:"  + studi.nachname + "\nAlter:"  + studi.alter + "\nGeschlecht:" + studi.geschlecht +"\nKommentar:" +studi.kommentar;
        
        
        
        
    }
    
    function queryData(_matrikel: number): string {
        
        for (let i: number = 0; i < students.length; i++) {
            
            if (students[i].matrikel== _matrikel){
        
        return "Folgende Daten sind unter dieser Matrikelnummer gespeichert:  \n\nMatrikel:"+ students[i].matrikel + "\nVorname:" + students[i].name + "\nName:"  + students[i].nachname + "\nAlter:"  + students[i].alter + "\nGeschlecht:" + students[i].geschlecht +"\nKommentar:" +students[i].kommentar;
    }}}
}