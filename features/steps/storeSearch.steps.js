const { expect } = require('chai');

const storeSearch = require('../page_objects/storeSearch.page.js');

const { Given, When, Then, } = require('cucumber');

// Begin of GIVEN statements
Given('que eu esteja na pagina incial da Loja', function () {
    storeSearch.openPage("https://lojinha-do-josenildo.lojaintegrada.com.br/")
  });

// Begin of WHEN statements
When('pesquiso por {string}', function (string) {
    storeSearch.searchForText(string),
    storeSearch.confirmSearch()
  });
  
// Begin of THEN statements
Then('devo o produto {string} pesquisado com sucesso', function (string) {
    storeSearch.waitForElement(storeSearch.searchResult)
    storeSearch.searchResult.getText().then((text) => {
        expect(text).to.equal(string);
    })
});

Then('devo ver o resultado contendo {string} como parte do nome', function (string) {
    storeSearch.waitForElement(storeSearch.searchResult)
    storeSearch.searchResult.getText().then((text) => {
        expect(text).to.contains(string);
    })
  });

Then('devo o produto pesquisado com insdisponível', function () {
    storeSearch.notAvaliableLabel.isDisplayed().then((displayed) => {
        expect(displayed).to.equal(true);
    })
});

Then('devo uma mensagem de produto não cadastrado', function () {
    storeSearch.searchResult.isDisplayed().then((displayed) => {
        expect(displayed).to.equal(false);
    })
});