class TesztKerdes{
    constructor(token) {
        this.token = token;

        const ajaxhivas = new Ajax(token);
    
    
    ajaxhivas.getAjax("/tesztek", tablaMegjelenit);

    
}
 tablaMegjelenit(adat){
    
    let kiir="";
    adat.forEach((element) =>{
        kiir+="<div class=teljesKerdes><div class='kerdes'>"+element.kerdes+"</div>";
        kiir+="<div class=valasz>"+element.v1+"</div>";
        kiir+="<div class=valasz>"+element.v2+"</div>";
        kiir+="<div class=valasz>"+element.v3+"</div>";
        kiir+="<div class=valasz>"+element.v4+"</div></div>";
    });
    $("#kerdesek").html(kiir);

}
}

    


