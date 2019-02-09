// require('chromedriver');
// const { Builder, By, Key, until } = require('selenium-webdriver');

// (async function example() {
//     let driver = await new Builder().forBrowser('chrome').build();
//     try{
//         await driver.get('https://www.baidu.com/')
//         await driver.findElement(By.js(function(){
//             let ele = document.querySelector("#kw")
//             return ele;
//         })).sendKeys('123');
//     }
//     finally{
//         await driver.sleep(10000);
//         await driver.quit();
//     }
// }
// )()
require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        driver.get('https://www.baidu.com/')
        await driver.findElement(By.id('kw'))
            .then(ele => ele.sendKeys('123'))
    }
    finally {
        await driver.sleep(10000);
        await driver.quit();
    }
}
)()