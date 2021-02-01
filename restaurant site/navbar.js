console.log("hey");
var f=1;
dropdown();

function dropdown(){
    var div=document.getElementById("drop_menu_id");
  if(f%2==0)
  {
    // background-color:blue;
    div.style.display="block";
    div.classList.add("dropmenu");
    console.log("done");
    f=f+1;
  }
  else{
      div.classList.remove("dropmenu");
    div.style.display="none";
      f=f+1;
  }

}