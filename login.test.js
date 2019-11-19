jest.setTimeout(30000);
const {Builder, By, Key, until} = require('selenium-webdriver');

let driver;

beforeAll(async () => {
    driver = await (new Builder().forBrowser('chrome').build())
    await driver.get('http://142.93.168.34/');
})
describe("Login feature", () => {
    test("Login fails when incorrect data is entered", async () => {
        await driver.findElement(By.css('#account-nav-right > li.drop-down.last-child.top-menu--login.drop-down')).click();
        await driver.findElement(By.id("username-pulldown")).sendKeys("miras")
        await driver.findElement(By.id("password-pulldown")).sendKeys("password")
        await driver.findElement(By.id("login-pulldown")).click()
        await driver.wait(until.urlIs('http://142.93.168.34/login'), 3000);
        await driver.findElement(By.css("#content-wrapper > div.flash.error.icon.icon-error")).isDisplayed()
    })
})

afterAll(async () => {
    await driver.quit();
})