const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('new-product-ci-desc-empy', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('new-product-ci-desc-less', async function() {
    await driver.get("http://localhost:1111/admin/login")
    await driver.manage().window().setRect({ width: 1366, height: 736 })
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("admin1@correo.com")
    await driver.findElement(By.id("password")).sendKeys("Tps-098*")
    await driver.findElement(By.id("loginForm")).click()
    await driver.findElement(By.css(".nav-item:nth-child(4) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("productTitle")).click()
    await driver.findElement(By.id("productTitle")).sendKeys("Item 58")
    await driver.findElement(By.id("productPrice")).sendKeys("99.99")
    await driver.findElement(By.css(".note-editable")).click()
    {
      const element = await driver.findElement(By.css(".note-para > .note-btn:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.css(".note-editable"))
    }
    await driver.findElement(By.id("productComment")).click()
    await driver.findElement(By.css(".note-style .note-btn")).click()
    await driver.findElement(By.css("h1")).click()
    {
      const element = await driver.findElement(By.css(".note-editable"))
    }
    await driver.findElement(By.id("frm_edit_product_save")).click()
    {
      const elements = await driver.findElements(By.css("#validationModalBody > p"))
      assert(elements.length)
    }
    await driver.sleep(5000);
  })
})


describe('new-product-ci-desc-less', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('new-product-ci-desc-less', async function() {
    await driver.get("http://localhost:1111/admin/login")
    await driver.manage().window().setRect({ width: 1366, height: 736 })
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("admin1@correo.com")
    await driver.findElement(By.id("password")).sendKeys("Tps-098*")
    await driver.findElement(By.id("loginForm")).click()
    await driver.findElement(By.css(".nav-item:nth-child(4) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("productTitle")).click()
    await driver.findElement(By.id("productTitle")).sendKeys("Item 58")
    await driver.findElement(By.id("productPrice")).sendKeys("99.99")
    await driver.findElement(By.css(".note-editable")).click()
    {
      const element = await driver.findElement(By.css(".note-para > .note-btn:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.css(".note-editable"))
      await driver.executeScript("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = '<p>Item 1 Item 1 description</p>'}", element)
    }
    await driver.findElement(By.id("productComment")).click()
    await driver.findElement(By.css(".note-style .note-btn")).click()
    await driver.findElement(By.css("h1")).click()
    {
      const element = await driver.findElement(By.css(".note-editable"))
      await driver.executeScript("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = '<h1>Item 1 Item 1 description</h1>'}", element)
    }
    await driver.findElement(By.id("frm_edit_product_save")).click()
    {
      const elements = await driver.findElements(By.css("#validationModalBody > p"))
      assert(elements.length)
    }
    await driver.sleep(5000);
  })
})

describe('new-product-ci-price-1dec', function() {
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
  it('new-product-ci-price-1dec', async function() {
    await driver.get("http://localhost:1111/admin/login")
    await driver.manage().window().setRect({ width: 1366, height: 736 })
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("admin1@correo.com")
    await driver.findElement(By.id("password")).sendKeys("Tps-098*")
    await driver.findElement(By.id("loginForm")).click()
    await driver.findElement(By.css(".nav-item:nth-child(4) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("productTitle")).click()
    await driver.findElement(By.id("productTitle")).sendKeys("Item 58")
    await driver.findElement(By.id("productPrice")).sendKeys("99.9")
    await driver.findElement(By.css(".note-editable")).click()
    {
      const element = await driver.findElement(By.css(".note-para > .note-btn:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.css(".note-editable"))
      await driver.executeScript("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = '<p>Item 1 description about all need details for this item</p>'}", element)
    }
    await driver.findElement(By.id("productComment")).click()
    await driver.findElement(By.css(".note-style .note-btn")).click()
    await driver.findElement(By.css("h1")).click()
    {
      const element = await driver.findElement(By.css(".note-editable"))
      await driver.executeScript("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = '<h1>Item 1 description about all need details for this item</h1>'}", element)
    }
    await driver.findElement(By.id("frm_edit_product_save")).click()
    assert(await driver.findElement(By.css("#validationModalBody > p")).getText() == "productPrice - Should be a full 2 decimal value. Eg: 10.99")
  })
})


describe('new-product-cv', function() {
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
  it('new-product-cv', async function() {
    await driver.get("http://localhost:1111/admin/login")
    await driver.manage().window().setRect({ width: 1366, height: 736 })
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("admin1@correo.com")
    await driver.findElement(By.id("password")).sendKeys("Tps-098*")
    await driver.findElement(By.id("loginForm")).click()
    await driver.findElement(By.css(".nav-item:nth-child(4) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("productTitle")).click()
    await driver.findElement(By.id("productTitle")).sendKeys("Item 59")
    await driver.findElement(By.id("productPrice")).sendKeys("99.99")
    await driver.findElement(By.css(".note-editable")).click()
    {
      const element = await driver.findElement(By.css(".note-para > .note-btn:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.css(".note-editable"))
      await driver.executeScript("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = '<p>Item 1 description about all need details for this item</p>'}", element)
    }
    await driver.findElement(By.id("productComment")).click()
    await driver.findElement(By.css(".note-style .note-btn")).click()
    await driver.findElement(By.css("h1")).click()
    {
      const element = await driver.findElement(By.css(".note-editable"))
      await driver.executeScript("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = '<h1>Item 1 description about all need details for this item</h1>'}", element)
    }
    await driver.findElement(By.id("frm_edit_product_save")).click()
    {
      const element = await driver.findElement(By.css(".note-insert > .note-btn:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    assert(await driver.findElement(By.id("notify_message")).getText() == "New product successfully created")
  })
})


