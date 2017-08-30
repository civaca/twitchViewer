


document.addEventListener("DOMContentLoaded", function () {
    var ajax;
    
    
    /*connection withe TWitch API*/
    function connect (x){
         
        var parent = document.getElementById("results");
         var newDiv = document.createElement("DIV");
            newDiv.setAttribute("class","row newResult");
        
            parent.appendChild(newDiv);
        var newAjax;
                    
        ajax = new XMLHttpRequest();
    ajax.open("GET", "https://wind-bow.glitch.me/twitch-api/channels/"+x, true);
        ajax.send();
    ajax.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
                       
            newAjax = JSON.parse(this.responseText);
            
           
            var newlin = document.createElement("A");
             newlin.setAttribute("class", "link")
            newlin.setAttribute("href", newAjax.url)
              newlin.setAttribute("target","_blanck")
            
            var newImg = document.createElement("img");
            newImg.setAttribute("class"," responsive logos col-xs-3 col-md-1  img-circle");
            newImg.setAttribute("src",newAjax.logo);
            var newP = document.createElement("P");
            newP.setAttribute("class", "name col-xs-4 col-md-2"); /*name*/
            newP.innerHTML = newAjax.display_name;
                    
            newlin.appendChild(newImg);
            newlin.appendChild(newP);
            
            newDiv.appendChild(newlin);
            
              /*stream*/
            var ajax1 = new XMLHttpRequest();
    ajax1.open("GET", "https://wind-bow.glitch.me/twitch-api/streams/"+x, true);
     
    ajax1.onreadystatechange = function (){
       
        
        if (this.readyState == 4 && this.status == 200){
            
            var newAjax1 = JSON.parse(this.responseText);
            
            
            var newParagrah = document.createElement("P"); /*game name*/
            newParagrah.setAttribute("class", "col-xs-4 col-md-1");
           
        
           
            if (newAjax1.stream!=null){
                
                newParagrah.innerHTML= newAjax1.stream.game;
            
                var newStat = document.createElement("P");
                newStat.setAttribute("class", "col-xs-10 col-md-8 status"); /*status*/
                newStat.innerHTML = newAjax.status;
               newDiv.appendChild(newParagrah);
                newDiv.appendChild(newStat);
                 
            
            } 
            else {
                newParagrah.innerHTML= "offline";
             newDiv.appendChild(newParagrah);}
           
            
            
           
        }; /* closure of if*/
        
    }; /* closure of onreadystatechange*/
        
       ajax1.send();
                           
            
            
            
            
           
        } /* closure of if*/
        
    }; /* closure of onreadystatechange*/
         
           
         
    
  
        
    

                        }/*closure of connect*/
    
    document.getElementById("searchs").addEventListener("change",function(){
        var parent = document.getElementById("results");
        while (parent.hasChildNodes()){
            parent.removeChild(parent.firstChild)
        };
        
        var z = document.getElementById("searchs").value;
        
        connect(z);
         if (connect(z).readyState == 4 && connect(z).status !== 200) {document.getElementById("error").innerHTML= "No found";
            } 
        
        
        
    });/*closure of change*/
    document.getElementById("main-channels").addEventListener("click",function(){
        
        
        var parent = document.getElementById("results");
        if(parent.hasChildNodes()){
        while (parent.hasChildNodes()){
            parent.removeChild(parent.firstChild)
        }};
        
        connect("ESL_SC2");
      connect("OgamingSC2");
      connect("cretetion");
  
      connect("freecodecamp");
 
    connect("habathcx");
    connect("RobotCaleb");
    connect("noobs2ninjas");
  
        
        
    }); /*closure of click of button return*/
   
    
    
   
    
    
    connect("ESL_SC2");
      connect("OgamingSC2");
      connect("cretetion");
  
      connect("freecodecamp");
 
    connect("habathcx");
    connect("RobotCaleb");
    connect("noobs2ninjas");
  
   
}); /*closure of loaded*/
