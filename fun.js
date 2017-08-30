
document.addEventListener("DOMContentLoaded", function () {
    
    /*connection withe TWitch API*/
    function connect (x){
         /*creating news Div*/
        var parent, newDiv;
        parent = document.getElementById("results");
         newDiv = document.createElement("div");
        newDiv.setAttribute("id", x);
            newDiv.setAttribute("class","row newResult");
        
            parent.appendChild(newDiv);
        
        /*connecting with channels*/
        var newAjax;
                    
       var ajax = new XMLHttpRequest();
    ajax.open("GET", "https://wind-bow.glitch.me/twitch-api/channels/"+x, true);
        
    ajax.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){ 
            newAjax = JSON.parse(this.responseText);
            
           /*creating link and images and name*/
            var newlin, newImg, newP;
            newlin = document.createElement("A");
             newlin.setAttribute("class", "link");
             
            
            newlin.setAttribute("href", newAjax.url);
              newlin.setAttribute("target","_blanck");
            
            newImg = document.createElement("img");
            newImg.setAttribute("class"," responsive logos col-xs-3 col-md-1  img-circle");
            newImg.setAttribute("src",newAjax.logo);
            newP = document.createElement("P");
            newP.setAttribute("class", "name col-xs-4 col-md-2"); /*name*/
            newP.innerHTML = newAjax.display_name;
                    
            newlin.appendChild(newImg);
            newlin.appendChild(newP);
            
            newDiv.appendChild(newlin);
            
              /* coneectin to stream*/
            var ajax1 = new XMLHttpRequest();
    ajax1.open("GET", "https://wind-bow.glitch.me/twitch-api/streams/"+x, true);
     
    ajax1.onreadystatechange = function (){
       
        
        if (this.readyState == 4 && this.status == 200){
            
            var newAjax1 = JSON.parse(this.responseText);
            
            /*creating game name and estatus*/
            var newParagrah = document.createElement("P"); /*game name*/
            newParagrah.setAttribute("class", "col-xs-4 col-md-1 estado");
           
            if (newAjax1.stream!==null){
                
                newParagrah.innerHTML= newAjax1.stream.game;
            
                var newStat = document.createElement("P");
                newStat.setAttribute("class", "col-xs-9 col-md-8 status"); /*status*/
                newStat.innerHTML = newAjax.status;
               newDiv.appendChild(newParagrah);
                newDiv.appendChild(newStat);
                 
            } 
            else {
                newParagrah.innerHTML= "offline";
             newDiv.appendChild(newParagrah);}
           
           
            }/* closure of if of conditions of ajax1*/
        
        }; /* closure of onreadystatechange of newAjax1*/
        
       ajax1.send();
                           
                             
        } /* closure of if conditions met of ajax */
        
    }; /* closure of onreadystatechange of newAjax*/
         
    ajax.send();   
         
}/*closure of connect*/
    
    var parent, child;
    parent = document.getElementById("results");
        child = parent.getElementsByClassName("newResult");
    
    
    document.getElementById("searchs").addEventListener("keyup",function(){
         
        var filter, alist;
        filter = document.getElementById("searchs").value.toLowerCase();
       
         var j =-1;
        while (j<child.length){
            j++;
            alist = child[j].getElementsByClassName("name")[0];
            alist.innerHTML.toLocaleLowerCase().indexOf(filter)>-1 ? child[j].style.display = "" : child[j].style.display = "none";
        }
    
    });/*closure of key up function of searchs*/

document.getElementById("off").addEventListener("click",function(){
        var alist;
        var j =-1;
        while (j<child.length){
            j++;
            alist = child[j].getElementsByClassName("estado")[0];
            alist.innerHTML.toLocaleLowerCase().indexOf("offline")>-1 ? child[j].style.display = "" : child[j].style.display = "none";
        }
    }); /*closure of click of button return*/
   
   document.getElementById("on").addEventListener("click",function(){
        var alist; 
       var j=-1;
        
        while (j<child.length){
            j++;
            alist = child[j].getElementsByClassName("estado")[0];
            alist.innerHTML.toLocaleLowerCase().indexOf("offline")==-1 ? child[j].style.display = "" : child[j].style.display = "none";
        }
    });
    
    document.getElementById("return").addEventListener("click",function(){
       
        var j=0;
        while(j<child.length){
        child[j].style.display = "";
        j++;}
        
    });
    
    
       connect("ESL_SC2");
     connect("OgamingSC2");
     connect("cretetion");
    connect("freecodecamp");
  connect("habathcx");
     connect("RobotCaleb");
    connect("noobs2ninjas");
     
    
   
}); /*closure of loaded*/
