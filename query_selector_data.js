require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example(){
    let driver = await new Builder().forBrowser('chrome').build();
    console.log("1")
    try {
        await driver.get('https://www.12306.cn/index/');
        await driver.executeScript(function () {
            let ele = document.querySelector('#train_date')
            ele.value = '2019-02-04'
        }
        )
        await driver.sleep(10000);
    } finally {
        await driver.quit();
    }
})();