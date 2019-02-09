const { Given, When, Then } = require('cucumber');
const { driver } = require('../support/web_driver');
const { Key } = require("selenium-webdriver");

Given(/^\.\.\.进入发帖页面$/, async function () {

    await driver.get('http://39.107.96.138:3000/signin')
    await driver.findElement({ id: "name" }).sendKeys('user19')
    await driver.findElement({ id: "pass" }).sendKeys('123456')
    await driver.findElement({ css:".span-primary"}).click()
    await driver.findElement({ id:"create_topic_btn"}).click()
});

When(/^\.\.\.输入control ＋ b$/, async function () {

    let ele = await driver.findElement({ css:".CodeMirror-code"})
    await driver.actions().mouseMove(ele).click().keyDown(Key.COMMAND).sendKeys('b').keyUp(Key.COMMAND).perform()
});