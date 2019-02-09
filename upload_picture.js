require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.baidu.com/')
        await driver.findElement({ css: 'span[class="soutu-btn"]'}).click()
        await driver.findElement({ css: 'input[class="upload-pic"]' }).sendKeys('/Users/ivon/Desktop/11.png')
    }
    finally {
        await driver.sleep(20000);
        await driver.quit();
    }
}
)()