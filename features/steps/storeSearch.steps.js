const { expect } = require('chai');

const storeSearch = require('../page_objects/storeSearch.page.js');

const { Given, When, Then, } = require('cucumber');

// Begin of GIVEN statements
Given('que eu esteja na pagina inicial da Loja', function (callback) {
    storeSearch.openPage("https://lojinha-do-josenildo.lojaintegrada.com.br/")
    .then(callback)
  });

// Begin of WHEN statements
When('pesquiso por {string}', function (string, callback) {
    storeSearch.searchForText(string),
    storeSearch.confirmSearch()
    .then(callback)
  });
  
// Begin of THEN statements
Then('devo o produto {string} pesquisado com sucesso', function (string, callback) {
    storeSearch.waitForElement(storeSearch.searchResult).then( function () {
        storeSearch.searchResult.getText().then((text) => {
            expect(text).to.equal(string);
        })
    .then(callback)
    });
});

Then('devo ver o resultado contendo {string} como parte do nome', function (string, callback) {
    storeSearch.waitForElement(storeSearch.searchResult).then( function () {
        storeSearch.searchResult.getText().then((text) => {
            expect(text).to.contains(string);
        })
    .then(callback)
    });
});

Then('devo o produto pesquisado com insdisponível', function (callback) {
    storeSearch.notAvaliableLabel.isDisplayed().then((displayed) => {
        expect(displayed).to.equal(true);
    })
    .then(callback)
});

Then('devo uma mensagem de produto não cadastrado', function (callback) {
    storeSearch.searchResult.isPresent().then((displayed) => {
        expect(displayed).to.equal(false);
    })
    .then(callback)
});