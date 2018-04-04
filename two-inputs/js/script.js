document.getElementById("submit").addEventListener("click", function() {
  var your_name = document.getElementById("your_name").value;
  var fav_color = document.getElementById("fav_color").value;
  var greeting = document.getElementById("greeting2");


  if(your_name.toLowerCase() == "grace") {
    greeting_1 = "my name is grace too!";
  }
   else {
    greeting_1 = "hi " + your_name + "! here's what I think of your color:";
  }

  if(fav_color.toLowerCase() == "green") {
    greeting_2 = "<strong>my favorite color is also green!</strong>";

  }
  else if(fav_color == "orange"){
    greeting_2 = "<strong>orange is a fantastic color, great choice.</strong>";
  }
  else if(fav_color == "blue"){
    greeting_2 = "<strong>really? blue? Okay.</strong>";
  }
  else if(fav_color == "yellow"){
    greeting_2 = "<strong>yellow is fantastic! You have excellent taste.</strong>";
  }
  else if(fav_color == "black"){
    greeting_2 = "<strong>is black really a color?</strong>";
  }
  else if(fav_color == "brown"){
    greeting_2 = "<strong>brown? what an unusual choice.</strong>";
  }
  else if(fav_color == "orange"){
    greeting_2 = "<strong>orange is a fantastic color, great choice.</strong>";
  }
  else if(fav_color == "purple"){
    greeting_2 = "<strong>purple, how royal!</strong>";
  }
  else if(fav_color == "gold"){
    greeting_2 = "<strong>oooh, fancy.</strong>";
  }
  else if(fav_color == "red"){
    greeting_2 = "<strong>intense!</strong>";
  }

  else {
    greeting_2 = "<strong>are you sure that's a color? maybe try something else.</strong>"
  }

  greeting.innerHTML = greeting_1 + "<br />" + greeting_2;
});
