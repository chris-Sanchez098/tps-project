// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('search_customers', function() {
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
  it('CI_CUSTOMER_NOT_FOUND', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.linkText("Customers")).click()
    await driver.findElement(By.id("customer_filter")).click()
    await driver.findElement(By.id("customer_filter")).sendKeys("Jose Fernandez")
    await driver.findElement(By.id("btn_customer_filter")).click()
    assert(await driver.findElement(By.css(".text-center")).getText() == "Not customer found")
  })
  it('CI_EMPTY', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.linkText("Customers")).click()
    await driver.findElement(By.id("customer_filter")).click()
    await driver.findElement(By.id("customer_filter")).sendKeys("\\n")
    await driver.findElement(By.id("btn_customer_filter")).click()
    assert(await driver.findElement(By.id("notify_message")).getText() == "The customers field cannot be empty")
  })
  it('CV', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.linkText("Customers")).click()
    await driver.findElement(By.id("customer_filter")).click()
    await driver.findElement(By.id("customer_filter")).sendKeys("prueba 1")
    await driver.findElement(By.id("btn_customer_filter")).click()
    assert(await driver.findElement(By.css("a .col-sm-3:nth-child(2) > div")).getText() == "prueba 1")
  })
})
