// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('logout-admin-CV', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('logout-admin-CV', async function() {
    await driver.get("http://localhost:1111/admin/login")
    await driver.manage().window().setRect({ width: 794, height: 728 })
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("admin@admin.com")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("admin")
    await driver.findElement(By.id("loginForm")).click()
    await driver.findElement(By.linkText("Logout")).click()
    await driver.findElement(By.css(".navbar-toggler")).click()
    assert(await driver.findElement(By.linkText("Home")).getText() == "Home")
  })
})
