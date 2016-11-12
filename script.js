// JavaScript File
window.onload = function()
{
    var search = document.getElementById("search");
    
    var searchDic = document.querySelector("#searchb");
    
    var result= document.getElementById("result");
    
    var respond= xmlhttp.responseXML;
    
    var xmlhttp;
    
    searchDic.addEventListener("click", function(e){
       e.preventDefault();
       
       var textS= search.value;
       if (textS != ""){
       
              xmlhttp= new XMLHttpRequest();
              xmlhttp.onreadystatechange = getHTML;
              var link= "request.php?q=&all=true" + textS;
              xmlhttp.open("GET", link, true);
              xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
              xmlhttp.send();
       }
       else
       {
           
              result.innerHTML= xmlhttp.responseText;
       }
        
       function defining(){
           if (xmlhttp.readyState === XMLHttpRequest.DONE){
                if (xmlhttp.status === 200) {
                    var group= result.getElementsByTagName("definitions");
                    
                    var div = document.createElement("div");
                    result.appendChild(div);
                    
                    for (var i=0; i<group.length; i++){
                        
                        var name=group[i].getAttribute("name");
                        var h1= document.createElement("h1");
                        var node=document.createTextNode(name);
                        var p=document.createElement("p");
                        var define=document.createTextNode(group[i].childNodes[0].nodeValue);
                        h1.appendChild(node);
                        p.appendChild(define);
                        
                        if (group[i].getAttribute("name")==textS){
                            div.appendChild(h1);
                            div.appendChild(p);
                            
                        }
                    }
                }
                else
                {
                    alert("Error! Something went wrong. ")
                }
           
         }
        
        var all= document.getElementById("definitions");
        
        all.addEventListener("click", function(e){
            
            
            e.preventDefault();
            var xml= new XMLHttpRequest();
            
            xml.onreadystatechange=getHTML;
            xml.open("GET", "request.php?q=&all=true");
            xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xml.send();
            
        
        function getHTML(){
            if (xmlhttp.readyState === XMLHttpRequest.DONE){
                if (xmlhttp.status === 200) {
                    //alert(xmlhttp.responseText);
                    //result.innerHTML=xmlhttp.responseText;
                    var respond = xml.responseXML;
                    var group = respond.getElementsByTagName("definitions");

                



                var list = document.createElement('ol');

                result.appendChild(list);

                for (var i = 0; i < group.length; i++) {

                    var each = document.createElement('li');

                    var name=group[i].getAttribute("name");

                    var authors=group[i].getAttribute("author");

                    

                    var h1=document.createElement("h1");

                    var node=document.createTextNode(name);

                    var p= document.createElement("p");

                    var define = document.createTextNode(group[i].childNodes[0].nodeValue);

                    var bottom=document.createElement("below");

                    var nodeTwo=document.createTextNode(authors);


                    p.appendChild(define);
                    h1.appendChild(node);
                    bottom.appendChild(nodeTwo);

                    each.appendChild(h1);

                    each.appendChild(p);

                    each.appendChild(bottom);

                    list.appendChild(each); }

                }
               else {

                alert('TError! Unexpected Event');

                }
                    
                 
                    
            }
                
            }
    
        }
        
        
       });
});