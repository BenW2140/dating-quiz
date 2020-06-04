$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const input = $("input:radio[name=animal]:checked").val();

    if (input === "goat") {
      $(".hidden#platypus").hide();
      $(".hidden#mantisShrimp").hide();
      $(".hidden#goat").show();
    } else if (input === "platypus") {
      $(".hidden#goat").hide();
      $(".hidden#mantisShrimp").hide();
      $(".hidden#platypus").show();
    } else {
      $(".hidden#goat").hide();
      $(".hidden#platypus").hide();
      $(".hidden#mantisShrimp").show();
    }
  });
});