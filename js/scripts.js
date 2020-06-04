$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const color = $("input:radio[name=color]:checked").val();
    const pet = $("input:radio[name=pet]:checked").val(); 

    if (color === "red" && pet === "goldFish" || color === "red" && pet === "dog") {
      $(".hidden#rick").hide();
      $(".hidden#morty").hide();
      $(".hidden#jerry").show();
    } else if (color === "green" && pet === "dog" || color === "green" && pet === "cat") {
      $(".hidden#rick").hide();
      $(".hidden#jerry").hide();
      $(".hidden#morty").show();
    } else {
      $(".hidden#morty").hide();
      $(".hidden#jerry").hide();
      $(".hidden#rick").show();
    }
  });
});