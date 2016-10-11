$(document).ready(function(){
  sayHey();
  labelDivs();
  lovesJS();
  listIterate();
});

var names = ["Carleton", "Avi", "Azat", "Ann"];


function sayHey() {
  $.each(names, function(index, name){
    console.log("hey " + name);
  });

}

function labelDivs() {
  $('div').each(function(index, div){
  $(this).append("this is div number " + (index + 1));
  });
}

function lovesJS() {
  $.map(names, function(name){
    console.log(name + " loves JavaScript");
    return name + " loves JavaScript";
  });
}


function listIterate(){
  return $('li').map(function(index, item){
      console.log(item.innerHTML);
      return item.innerHTML;
  });
}
