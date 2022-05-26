function goToGame(game){
    var tempURL = window.location.href.split("/");
    tempURL[8] = `Games/${game}.html`;
    if(document.getElementById("blankToggle").checked == false){
        window.location.href = tempURL.join("/");
    }else{
        window.open(tempURL.join("/"))
    }
}

function goToWeb(web){
    if(document.getElementById("blankToggle").checked == false){
        window.location.href = web;
    }else{
        window.open(web)
    }    
}