require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
const fs = require('fs');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://login.anjuke.com/login/form?history=aHR0cHM6Ly9zaGFuZ2hhaS5hbmp1a2UuY29tLz9waT1QWi1iYWlkdS1wYy1hbGwtYmlhb3Rp');
        await driver.switchTo().frame('iframeLoginIfm')
        await driver.findElement({ id:'phoneIpt'}).sendKeys('12333')
        await driver.sleep(3000)
    } finally {
        await driver.quit();
    }
})();