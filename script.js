
const list=document.getElementsByClassName("list")[0];
const input=document.getElementById("input")
const trash=document.getElementById("trash")

input.addEventListener("keydown",function(event)
{
    if(event.key==="Enter")
    addItem();
})

function addItem()
{
    var divparent=document.createElement("div");
    var divchild=document.createElement("div");
    var check=document.createElement("i");
    var trash=document.createElement("i");

    divparent.className="item";
    divparent.innerHTML='<div>'+input.value+'</div>';
    
    check.className="fas fa-check-square";
    check.style.color="lightgray";

    var timesClicked = 0;
    
    // check.addEventListener("click",f1());
    // check.addEventListener("click",f2());
    // function f1(){
    //     check.style.color="lightgreen";
    //     divparent.style.textDecoration="line-through";
    // }
    // function f2()
    // {
    //     check.style.color="lightgray";
    //     divparent.style.textDecoration="none";
    // }
    check.addEventListener("click",function(){
        check.style.color="lightgreen";
        divparent.style.textDecoration="line-through";
    })
    check.addEventListener("dblclick",function(){
        check.style.color="lightgray";
        divparent.style.textDecoration="none";
    })
divchild.append(check);


trash.className="fas fa-trash";
trash.style.color="drakgray";

trash.addEventListener("click",function(){
    divparent.remove();
})
divchild.appendChild(trash);

divparent.appendChild(divchild);

list.appendChild(divparent);

input.value='';
}
