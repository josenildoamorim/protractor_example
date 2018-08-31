const { expect } = require('chai');

const search = require('../page_objects/search.page.js');


const { Given, When, Then, } = require('cucumber');

// Begin of GIVEN statements

// Begin of WHEN statements
When('eu pesquiso por {string}', function (string) {
    search.openPage('http://wwww.google.com.br'),
    search.searchForText(string)
  });
  
// Begin of THEN statements
Then('eu devo ver os resultados referentes a {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });