const { protractor, element, by, $ } = require ('protractor');
const EC = require('protractor').ExpectedConditions;

class StoreSearch {
  constructor() {
      this.searchField = element(by.id('auto-complete'))
      this.searchBtn = element(by.className('.botao.botao-busca.icon-search.fundo-secundario'))
      this.searchResult = $('.nome-produto.cor-secundaria')
      this.notAvaliableLabel = $('.bandeira-indisponivel.fundo-secundario')
    }

    openPage(url) {
      browser.ignoreSynchronization = true;
      return browser.get(url);  
    }

    searchForText(text) {
      return this.searchField.sendKeys(text);
    }

    confirmSearch() {
      return this.searchField.sendKeys(protractor.Key.ENTER);
    }

    waitForElement(subject) {
      return browser.wait(EC.visibilityOf(subject), 5000);
    }  

}

module.exports = new StoreSearch();