$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const numberInput = $("input#number").val();
    //console.log(numberInput);
    const nameInput = $("input#name").val();
    const pronounInput = $("input#pronoun").val();
    const nounInput = $("input#noun").val();
    const activityInput = $("input#activity").val();
    const verb2Input = $("input#verb2").val();
    const adjectiveInput = $("input#adjective").val();

    $("#numberspan").text(numberInput);
    $("#namespan").text(nameInput);
    $("#pronounspan").text(pronounInput);
    $("#nounspan").text(nounInput);
    $("#activityspan").text(activityInput);
    $("#verb2span").text(verb2Input);
    $("#adjectivespan").text(adjectiveInput);
    $("#storyspan").show();

    $("#story").show();

    
    
  });
});