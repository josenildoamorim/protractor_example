const { protractor, element, by, $, $$ } = require ('protractor');

class Search {
  constructor() {
      this.searchField = element(by.id('lst-ib'))
      this.searchbtn = element(by.name('btnK'))
    }

    openPage(url) {
      browser.driver.manage().window().maximize();
      return browser.get(url);  
    }

    searchForText(text) {
      return this.searchField.sendKeys(text)
    }

    confirmSearch() {
      return this.searchbtn.click()
    }

}

module.exports = new Search();
