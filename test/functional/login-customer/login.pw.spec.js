// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('login-user-pwd-ci-empty', function() {
  this.timeout(20000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('login-user-pwd-ci-empty', async function() {
    await driver.get("http://localhost:1111/")
    await driver.manage().window().setRect({ width: 1366, height: 736 })
    await driver.findElement(By.css(".ml-3 > .btn")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("fnarvaez@correo.com")
    await driver.findElement(By.id("password")).sendKeys("")
    await driver.findElement(By.id("customerloginForm")).click()
    await driver.sleep(5000);
    assert(await driver.findElement(By.id("notify_message")).getText() == "the password field is required")
    await driver.sleep(5000);
  })
})


describe('login-user-pwd-ci-fake', function() {
  this.timeout(20000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('login-user-pwd-ci-fake', async function() {
    await driver.get("http://localhost:1111/")
    await driver.manage().window().setRect({ width: 1366, height: 736 })
    await driver.findElement(By.css(".ml-3 > .btn")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("fnarvaez@correo.com")
    await driver.findElement(By.id("password")).sendKeys("paswd23")
    await driver.findElement(By.id("customerloginForm")).click()
    assert(await driver.findElement(By.id("notify_message")).getText() == "Access denied. Check password and try again.")
    await driver.sleep(5000);
  })
})


describe('login-user-pwd-cv', function() {
  this.timeout(20000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('login-user-pwd-cv', async function() {
    await driver.get("http://localhost:1111/")
    await driver.manage().window().setRect({ width: 1366, height: 736 })
    await driver.findElement(By.css(".ml-3 > .btn")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("fnarvaez@correo.com")
    await driver.findElement(By.id("password")).sendKeys("tps-pwd07*")
    await driver.findElement(By.id("customerloginForm")).click()
    {
      const elements = await driver.findElements(By.css(".customer-details-login"))
      assert(elements.length)
    }
    await driver.sleep(5000);
  })
})
