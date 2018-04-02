document.getElementById("submit").addEventListener("click", function() {
  var your_name = document.getElementById("your_name").value;
  var description = document.getElementById("description");
  var your_color = document.getElementById("your_color");
  if(your_name == "Grace"){
    description.innerHTML = "Another Grace!";
  }
  else {
    description.innerHTML = "your_name";
  }
  if(your_color == "yellow"){
    
  }
});
