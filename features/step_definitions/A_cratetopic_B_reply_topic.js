const { Given, When, Then } = require('cucumber');
const { driver,otherdriver } = require('../support/web_driver');

async function user_login(driver,user_name,password){
    await driver.get('http://39.107.96.138:3000/signin')
    await driver.findElement({ id: "name" }).sendKeys(user_name)
    await driver.findElement({ id: "pass" }).sendKeys(password)
    await driver.findElement({ css: ".span-primary" }).click()
}

async function edit_text(driver){
    let ele = await driver.findElement({ css: ".CodeMirror-code" })
    await driver.actions().mouseMove(ele).click().sendKeys('b121eqeqew1eqqwd').perform()
    await driver.findElement({ css: 'input[class="span-primary submit_btn"]' }).click()
}

async function post_topic(driver){
    await driver.get('http://39.107.96.138:3000/topic/create')
    await driver.findElement({id:'tab-value'}).click()
    await driver.findElement({ css:'#tab-value>option:nth-child(2)'}).click()
    await driver.findElement({ id:"title"}).sendKeys("ivon1111111222")
    await edit_text(driver)
}

async function reply_topic(driver){
    await driver.navigate().refresh()
    await driver.findElement({ css:"#topic_list>div:nth-child(1)>div>a"}).click()
    await edit_text(driver)
}

Given(/^\.\.\.用户A登录系统$/, async function () {

    await user_login(driver,'user1','123456')
});

Given(/^\.\.\.用户B登录系统$/, async function () {

    await user_login(otherdriver,'user19','123456')
});

Then(/^\.\.\.用户A发布一个话题$/, async function () {

    await post_topic(driver)
});

Then(/^\.\.\.用户B回复用户A发布的话题$/, async function () {

    await reply_topic(otherdriver)
});