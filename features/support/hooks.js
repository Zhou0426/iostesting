let { driver } = require('./get_driver')
let {BeforeAll,Before,After,AfterAll,setDefaultTimeout} = require('cucumber')
let path = require('path')

setDefaultTimeout(60*1000)

BeforeAll(async function(){
    let desiredCaps = {
        platformName: "iOS",
        platformVersion: "11.4",
        deviceName: "iPhone 7",
        automationName: "XCUITest",
        app: path.resolve('/Users/zack/Library/Developer/Xcode/DerivedData/FoodTracker-bidmzqqybmbcqcbncwomyqmqbvoi/Build/Products/Debug-iphonesimulator/FoodTracker.app')
    };

    await driver.init(desiredCaps);
    await driver.setImplicitWaitTimeout(15000);
})



After(async function(){
    let screenshot = await driver.takeScreenshot();
    this.attach(screenshot, 'image/png');
})


AfterAll(function(){
    return driver.quit();
})