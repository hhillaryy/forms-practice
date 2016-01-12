$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var verb1Input = $("input#verb1").val();
    var adjective1Input = $("input#adjective1").val();
    var farewellInput = $("input#farewell").val();
    var person3Input = $("input#person3").val();

    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".verb1").append(verb1Input);
    $(".adjective1").append(adjective1Input);
    $(".farewell").append(farewellInput);
    $(".person3").append(person3Input);


    $("#letter").show();

    event.preventDefault();
  });
});
