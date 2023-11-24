// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Payment-card-number-CV', function() {
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
  it('Payment-card-number-CV', async function() {
    await driver.get("http://localhost:1111/")
    await driver.manage().window().setRect({ width: 733, height: 728 })
    await driver.findElement(By.linkText("Add to cart")).click()
    await driver.findElement(By.css(".col-6:nth-child(2) .btn")).click()
    await driver.findElement(By.linkText("Cart 2")).click()
    await driver.findElement(By.linkText("Checkout")).click()
    await driver.findElement(By.id("checkoutInformation")).click()
    await driver.findElement(By.linkText("Proceed to payment")).click()
    await driver.switchTo().frame(3)
    await driver.findElement(By.id("Field-numberInput")).click()
    await driver.findElement(By.id("Field-numberInput")).sendKeys("4242 4242 4242 4242")
    await driver.findElement(By.id("Field-expiryInput")).click()
    await driver.findElement(By.id("Field-expiryInput")).sendKeys("12 / 34")
    await driver.findElement(By.id("Field-cvcInput")).click()
    await driver.findElement(By.id("Field-cvcInput")).sendKeys("567")
    await driver.findElement(By.id("Field-countryInput")).click()
    await driver.switchTo().defaultContent()
    await driver.findElement(By.id("button-text")).click()
    assert(await driver.findElement(By.css(".text-success")).getText() == "Your payment has been successfully processed")
  })
})

describe('Payment-card-number-CI-1', function() {
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
  it('Payment-card-number-CI-1', async function() {
    await driver.get("http://localhost:1111/")
    await driver.manage().window().setRect({ width: 733, height: 728 })
    await driver.findElement(By.linkText("Add to cart")).click()
    await driver.findElement(By.css(".col-6:nth-child(2) .btn")).click()
    await driver.findElement(By.linkText("Cart 2")).click()
    await driver.findElement(By.linkText("Checkout")).click()
    await driver.findElement(By.id("checkoutInformation")).click()
    await driver.findElement(By.linkText("Proceed to payment")).click()
    await driver.switchTo().frame(3)
    await driver.findElement(By.id("Field-numberInput")).click()
    await driver.findElement(By.id("Field-numberInput")).sendKeys("1234 1234 1234 ")
    await driver.findElement(By.id("Field-expiryInput")).click()
    await driver.findElement(By.id("Field-expiryInput")).sendKeys("12 / 34")
    await driver.findElement(By.id("Field-cvcInput")).click()
    await driver.findElement(By.id("Field-cvcInput")).sendKeys("567")
    await driver.findElement(By.id("Field-countryInput")).click()
    await driver.switchTo().defaultContent()
    await driver.findElement(By.id("button-text")).click()
    assert(await driver.findElement(By.id("Field-numberError")).getText() == "Your card number is incomplete.")
  })
})

describe('Payment-card-number-CI-2', function() {
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
  it('Payment-card-number-CI-2', async function() {
    await driver.get("http://localhost:1111/")
    await driver.manage().window().setRect({ width: 733, height: 728 })
    await driver.findElement(By.linkText("Add to cart")).click()
    await driver.findElement(By.css(".col-6:nth-child(2) .btn")).click()
    await driver.findElement(By.linkText("Cart 2")).click()
    await driver.findElement(By.linkText("Checkout")).click()
    await driver.findElement(By.id("checkoutInformation")).click()
    await driver.findElement(By.linkText("Proceed to payment")).click()
    await driver.switchTo().frame(3)
    await driver.findElement(By.id("Field-numberInput")).click()
    await driver.findElement(By.id("Field-numberInput")).sendKeys("\'\'")
    await driver.findElement(By.id("Field-expiryInput")).click()
    await driver.findElement(By.id("Field-expiryInput")).sendKeys("12 / 34")
    await driver.findElement(By.id("Field-cvcInput")).click()
    await driver.findElement(By.id("Field-cvcInput")).sendKeys("567")
    await driver.findElement(By.id("Field-countryInput")).click()
    await driver.switchTo().defaultContent()
    await driver.findElement(By.id("button-text")).click()
    assert(await driver.findElement(By.id("payment-message")).getText() == "Your card number is incomplete.")
  })
})
