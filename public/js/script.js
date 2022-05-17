$(function (){
    const token = $('meta[name="csrf-token"]').attr("content");
 

    const ajaxhivas = new Ajax(token);
    
    
    ajaxhivas.getAjax("/tesztek", tablaMegjelenit);

    
});
function tablaMegjelenit(adat){
    
    let kiir="";
    adat.forEach((element) =>{
        kiir+="<div class=teljesKerdes><div class='kerdes'>"+element.kerdes+"</div>";
        kiir+="<div class=valasz id=" + 1 + ">"+element.v1+"</div>";
        kiir+="<div class=valasz id="+2+">"+element.v2+"</div>";
        kiir+="<div class=valasz id="+3+">"+element.v3+"</div>";
        kiir+="<div class=valasz id="+4+">"+element.v4+"</div></div>";
    });
    $("#kerdesek").html(kiir);
    
    $(".valasz").on("click", (event) => {
        if(event.target.id!=="1"){
            $("#"+event.target.id).css("background-color","red");
            $("#"+event.target.id).css("color","white");
        }else{
            $("#"+event.target.id).css("background-color","green");
            $("#"+event.target.id).css("color","white");
        }
        

    });
}

    

    