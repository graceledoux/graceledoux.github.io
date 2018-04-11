$("#submit").on("click", function() {
  var your_name = $("#your_name").val();
  var fav_color = $("#fav_color").val();
  var greeting = $("#greeting2");


  if(your_name == "grace") {
    greeting_1 = "my name is grace too!";
  }
   else {
    greeting_1 = "hi " + your_name + "! here's what I think of your color:";
  }

  if(fav_color == "green") {
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

  greeting.html (greeting_1 + "<br />" + greeting_2);
});
