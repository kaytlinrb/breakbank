//Buisness logic
function Account (firstName, initDeposit, newDeposit, newWithdrawal) {
  this.firstName = firstName;
  this.initDeposit = initDeposit;
  this.newDeposit = newDeposit;
  this.newWithdrawal = newWithdrawal;
}

Account.prototype.operations = function(){
  return this.initDeposit + this.newDeposit - this.newWithdrawal;
}


//User Interface
$(function() {
  $("#account-setup").submit(function(event) {
    event.preventDefault();

    var nameInput = $("#first-name").val();
    var initDeposit = parseInt($("#init-deposit").val());

    myAccount = new Account(nameInput, initDeposit);
    console.log(myAccount);
    // var accountTotal = newAccount.operations();
    $("h3.welcome").text("Welcome, " + nameInput + "!")
    $("h2").text("$" + initDeposit);
    $(".sign-up").hide();
    $(".your-account").show();
  });


    $("#operations").submit(function(event) {
      event.preventDefault();

      myAccount.newDeposit = parseInt($("#deposit").val());
      myAccount.newWithdrawal = parseInt($("#withdrawal").val());

      console.log(myAccount);
      var accountTotal = myAccount.operations();
      $("h2").text("$" + accountTotal);
    });




});
