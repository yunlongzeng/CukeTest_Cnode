const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');
const { By, until } = require("selenium-webdriver");

Given(/^浏览到搜索网站 "([^"]*)"$/, async function (url) {
    await driver.get(url);
});

When(/^\.\.\.点击登录按钮$/, async function () {

    await driver.findElement({ css: 'li > a[href = "/signin"]' }).click()
});

Then(/^\.\.\.进入登录页面$/, async function () {

    let result = await driver.findElement({ css: 'a[id="forgot_password"]' }).getText()
    console.log(result)
    assert.equal(result, "忘记密码了?")
});


Given(/^\.\.\.直接进入登录页面 "([^"]*)"$/, async function (url) {

    await driver.get(url)
});

When(/^\.\.\.输入用户名 "([^"]*)"$/, async function (username) {

    this.username = username
    await driver.findElement({id:"name"}).sendKeys(username)
});

When(/^\.\.\.输入密码 "([^"]*)"$/, async function (pwd) {

    this.pwd = pwd
    await driver.findElement({id:"pass"}).sendKeys(pwd)
});

When(/^\.\.\.点击登录的按钮$/, async function () {
  
    await driver.findElement({ css: '.span-primary' }).click()
});

Given(/^\.\.\.结果为 "([^"]*)",信息提示应为 "([^"]*)"$/, async function (result, message) {

    switch(result){

        case("True"):
            let res = await driver.findElement({ css:"span>.dark"}).getText();
            console.log(res);
            assert.ok(res == message);
            break;
        case("False"):
            if (this.username == "" || this.pwd == "") 
            {
                let res = await driver.findElement({ css:'div[class="alert alert-error"]>strong'}).getText();
                console.log(1111 + res);
                assert.ok(res == message);
            }
            else 
            {
                let res = await driver.findElement({ css: 'div[class="alert alert-error"]>strong' }).getText();
                console.log(2222 + res);
                assert.ok(res == message);

            }
            break;

    }
});

Given(/^\.\.\.打开百度$/, async function () {

    await driver.get('https://www.baidu.com/')
});

When(/^\.\.\.移动鼠标到音乐，并点击$/, async function () {

    let ele_a = await driver.findElement({css:".bri"})
    await driver.actions().mouseMove(ele_a).perform()
    let ele_b = await driver.findElement({ css: "a[name = 'tj_mp3']"})
    await driver.actions().mouseMove(ele_b).click().perform();
});

Then(/^\.\.\.进入音乐页面$/, async function () {

    let url = await driver.getCurrentUrl()
    assert.ok(url =='http://music.taihe.com/')
});


Given(/^\.\.\.进入网址 "([^"]*)"$/, async function (url) {

    await driver.get(url)
});

When(/^\.\.\.点击导航栏$/, async function () {

    await driver.sleep(4000)
    await driver.findElement({ css: ".menu-icon"}).click()
});

Then(/^\.\.\.进入导航页面$/, async function () {

    let eles = await driver.findElements({ css:'.menu>ul>li'})
    // for (let ele of eles){
    //     let text = await ele.getText()
    //     console.log(text)
    // }
    for (i = 0; i<eles.length; i++){
        let text = await eles[i].getText()
        console.log(text)
    }
});


When(/^\.\.\.点击 导航栏$/, async function () {

    await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.menu-icon'))),100000).click()


});

Given(/^\.\.\.进入boss直聘登录页面$/, async function () {

    await driver.get('https://account.aliyun.com/register/register.htm?spm=5176.8142029.388261.32.3dbd6d3eXlUpXG&oauth_callback=https%3A%2F%2Fwww.aliyun.com%2F%3Futm_content%3Dse_1000301881')
});

When(/^\.\.\.拖拽按钮到最右边$/, async function () {

    await driver.switchTo().frame('alibaba-register-box')
    let div = await driver.findElement({ id:'nc_1_n1z'})
    let div_location = await div.getLocation()
    console.log(div_location)
    await driver.actions().dragAndDrop(div,{x:div_location.x,y:div_location.y}).perform()
});

Given(/^\.\.\.打开郑州大学官网$/, async function () {

    await driver.get('http://www15.zzu.edu.cn/')
});

When(/^\.\.\.点击学术报告$/, async function () {

    await driver.findElement({ linkText:'《微电子封装的界面失效机制与可靠性研究》学术报告'}).click()
});

Then(/^\.\.\.切换至第一个页面窗口$/, async function () {

    let all_windows = await driver.getAllWindowHandles()
    console.log(all_windows.length)
    await driver.sleep(1000)
    await driver.switchTo().window(all_windows[0])
    await driver.sleep(3000)
});





