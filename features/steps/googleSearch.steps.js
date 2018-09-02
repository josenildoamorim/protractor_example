const { expect } = require('chai');

const googleSearch = require('../page_objects/googleSearch.page.js');

const { Given, When, Then, } = require('cucumber');

// Begin of GIVEN statements
Given('que eu esteja na pagina incial do Google', function () {
  googleSearch.openPage('http://wwww.google.com.br')
  });

// Begin of WHEN statements
When('eu pesquiso por {string}', function (string) {
  googleSearch.waitForElement(googleSearch.searchField),
  googleSearch.searchForText(string)
  });
  
// Begin of THEN statements
Then('eu devo ver os resultados referentes a globo', function () {
  googleSearch.waitForElement(googleSearch.searchResult)
  googleSearch.searchResult.isDisplayed().then((displayed) => {
    expect(displayed).to.equal(true);
  })
});