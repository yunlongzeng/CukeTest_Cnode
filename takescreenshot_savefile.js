require('chromedriver');
const {Builder, By, Key, until } = require('selenium-webdriver');
const fs = require('fs');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.baidu.com/');
        let imagedata = await driver.takeScreenshot();
        let databuffer = new Buffer(imagedata,'base64');
        fs.writeFile('/Users/ivon/Desktop/11.png',databuffer,function(err) {
            if (err){
                console.log(err)
            }
        })
    } finally {
        await driver.quit();
    }
})();