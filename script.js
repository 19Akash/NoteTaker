
var arr =[]
var text = "";
if(text==="")
{
    var ul = document.getElementById("list");
    var textarea = document.createElement("textarea");
    textarea.classList.add("list-group-item");
    textarea.classList.add("addCSS")
    textarea.appendChild(document.createTextNode(`Nothing to show! use "Add a Note" section above to add notes`));
    textarea.setAttribute("id", "emptyarea")
    ul.appendChild(textarea);
}


var count=0;
function inputclicked(){
    text = document.getElementById("input-area").value;
    document.getElementById("input-area").value ="";
     if(text!="")
     {
        var ul = document.getElementById("list");
        if(count===0)
        {
            ul.removeChild(document.getElementById("emptyarea"))
            count=count+1;
        }
        

        var textarea2 = document.createElement("textarea");
        textarea2.classList.add("list-group-item");
        textarea2.classList.add("addCSS")
        textarea2.appendChild(document.createTextNode(text));
        
        
        
        ul.appendChild(textarea2)
     }
    
}


