var items = ["laundry", "groceries", "bank"];

$("#submit").on("click", function(){
  var list_item = $("#list_item").val();

  for(var i = 0; i < items.length; i++){
    if(list_item == items[i]){
      alert("That's already on the list!"); break;
    }

  else{

  items.push(list_item);
  var output = $("#output");
  var temp = "";
  for(var i = 0; i < items.length; i++){
    temp = temp + "<p>" + items[i] + "</p>"}
  output.html (temp);
}

}});
