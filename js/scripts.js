$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const numberInput = $("input#number").val();
    const nameInput = $("input#name").val();
    const pronounInput= $("input#pronoun").val();
    const nounInput = $("input#noun").val();
    const activityInput = $("input#activity").val();
    const verb2Input = $("input#verb2").val();
    const adjectiveInput = $("input#adjective").val();

    const theInputs = [numberInput, nameInput, pronounInput, nounInput, activityInput, verb2Input, adjectiveInput];
    theInputs.forEach(function(theInput) {
      $(".form-control").text(theInput);
    });

    /*
    $("#numberspan").text(numberInput);
    $("#namespan").text(nameInput);
    $("#pronounspan").text(pronounInput);
    $("#nounspan").text(nounInput);
    $("#activityspan").text(activityInput);
    $("#verb2span").text(verb2Input);
    $("#adjectivespan").text(adjectiveInput);
    */

    $("#story").show();

    event.preventDefault();
  });
});