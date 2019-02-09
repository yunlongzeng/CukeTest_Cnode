const { After, Before, AfterAll, setDefaultTimeout } = require('cucumber');
const { driver,otherdriver } = require('./web_driver');


//set default step timeout
setDefaultTimeout(60 * 1000);

Before(function () {
    //Before Scenario Hook
})

After(async function () {
    //After Scenario Hook

    //capture screenshot after each scenario
    let screenshot = await driver.takeScreenshot();
    this.attach(screenshot, 'image/png');
    // clean up cookies
    await driver.manage().deleteAllCookies();
});

After({tags:"@other"}, async function () {
    //After Scenario Hook

    //capture screenshot after each scenario
    let screenshot = await otherdriver.takeScreenshot();
    this.attach(screenshot, 'image/png');
    // clean up cookies
    await otherdriver.manage().deleteAllCookies();
});

AfterAll(async function () {
    //perform some shared teardown
    await driver.quit();
    await otherdriver.quit();
})

