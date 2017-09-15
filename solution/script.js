var students = ["Tina", "Tazz", "Christina","Morgane","Emma"];

$(document).ready(function() {

  displayStudents();

  $("button").click(function(){
    var newStudent = $("input").val();
    if(newStudent != ""){
      students.push(newStudent);
      displayStudents();
    }
  });
});

function displayStudents(){
  $("#students").html("");
  for(i = 0; i < students.length; i ++){
    $("#students").append("<p>"+students[i]+"</p>")
  }
}
