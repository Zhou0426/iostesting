
const { Given, When, Then } = require('cucumber');
let {driver} = require('../support/get_driver')
let assert = require('assert')
//// 你的步骤定义 /////



Given(/^点击添加按钮$/, async function () {
    await driver.elementByAccessibilityId("Add").click();
});

When(/^meal name 中输入"([^"]*)"$/, async function (text) {

    let edit = await driver.elementByIosClassChain('**/XCUIElementTypeTextField[`value == "Enter meal name"`]')
    await edit.click();
    await edit.sendKeys(text);
});

When(/^点击图片从相册中选择一张图片$/, async function () {

    let uploadImage = await driver.elementByAccessibilityId('defaultPhoto')
    await uploadImage.click();


    let Moments = await driver.elementByAccessibilityId('Moments')
    await Moments.click();


    let allimge = await driver.elementsByIosClassChain('**/XCUIElementTypeCollectionView/**/XCUIElementTypeCell')

    console.log("length is ",allimge.length);

    let index = Math.floor(Math.random() * Math.floor(allimge.length))
    await allimge[3].click();
});

When(/^选择(\d+)颗星$/, async function (arg1) {

    await driver.elementByAccessibilityId('Set 4 star rating').click();
});

When(/^点击保存按钮$/, async function () {

    await driver.elementByAccessibilityId('Save').click()
});

Then(/^首页应该会有(\d+)个列表$/, async function (num) {

    let itemlist = await driver.elementsByIosClassChain('**/XCUIElementTypeTable/**/XCUIElementTypeCell')
    return assert.equal(num,itemlist.length)
});

Given(/^选择点击最后一个列表$/, async function () {

    let itemlist = await driver.elementsByIosClassChain('**/XCUIElementTypeTable/**/XCUIElementTypeCell')
    await itemlist[itemlist.length - 1].click()
});

When(/^文本输入框中的更改值为"([^"]*)"$/, async function (text) {

    let edit = await driver.elementByIosClassChain('**/XCUIElementTypeTextField')
    await edit.click();
    await edit.clear();
    await edit.sendKeys(text);
    await driver.hideDeviceKeyboard();
});

Then(/^首页最后一个列表文本值应该为"([^"]*)"$/, async function (textval) {

    let itemlist = await driver.elementsByIosClassChain('**/XCUIElementTypeTable/**/XCUIElementTypeCell')

    let last = itemlist.length - 1;
    let element = itemlist[last].elementByIosClassChain('**/XCUIElementTypeStaticText')
    let text = await element.text();
    return assert.equal(text,textval);
});

Given(/^获取首页的文本值$/, async function () {

    let itemlist = await driver.elementsByIosClassChain('**/XCUIElementTypeTable/**/XCUIElementTypeCell')

    let last = itemlist.length - 1;

    let element =  await itemlist[2].elementByIosClassChain('**/XCUIElementTypeStaticText') 
    // console.log("element",element)
    let text = await element.text();
    console.log("text===",text)


    let id = await driver.elementByAccessibilityId('Pasta with Meatballs').text()
    console.log("id===",id)
});