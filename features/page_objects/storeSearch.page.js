const { element, by } = require ('protractor');
const EC = require('protractor').ExpectedConditions;

class StoreSearch {
  constructor() {
      this.searchField = element(by.id('auto-complete'))
      this.searchBtn = element(by.className('.botao.botao-busca.icon-search.fundo-secundario'))
      this.searchResult = element(by.className('.nome-produto.cor-secundaria'))
      this.notAvaliableLabel = element(by.className('.bandeira-indisponivel.fundo-secundario'))
    }

    openPage(url) {
      browser.driver.manage().window().maximize();
      return browser.get(url);  
    }

    searchForText(text) {
      return this.searchField.sendKeys(text)
    }

    confirmSearch() {
      return this.searchBtn.click()
    }

    waitForElement(subject) {
      return browser.wait(EC.visibilityOf(subject), 5000);
    }  

}

module.exports = new StoreSearch();