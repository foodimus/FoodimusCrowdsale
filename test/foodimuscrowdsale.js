var FoodimusCrowdsale = artifacts.require("./FoodimusCrowdsale.sol");
var FDMToken = artifacts.require("./FDMToken.sol");

contract('FoodimusCrowdsale', function(accounts) {

   it("should put 30000000 FDM in the first account", function() {
      return FoodimusCrowdsale.deployed().then(function(instance) {
         return instance.token.call();
      }).then(function(address) {
         return FDMToken.at(address);
      }).then(function(tokenInstance) {
         return tokenInstance.balanceOf.call(accounts[0]);
      }).then(function(balance) {
         assert.equal(balance.valueOf(), 3000000, "3000000 wasn't in the first account");
      });
   });

});
