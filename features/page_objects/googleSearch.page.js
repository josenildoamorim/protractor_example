const { element, by } = require ('protractor');
const EC = require('protractor').ExpectedConditions;

class GoogleSearch {
  constructor() {
      this.searchField = element(by.id('lst-ib'))
      this.searchBtn = element(by.name('btnK'))
      this.searchResult = element(by.css('a[href*="https://www.globo.com/"]'))
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

module.exports = new GoogleSearch();
