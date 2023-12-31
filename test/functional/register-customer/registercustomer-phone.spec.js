// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Register-customer-phone', function() {
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
  it('cv-phone', async function() {
    await driver.get("http://127.0.0.1:1111/")
    await driver.manage().window().setRect({ width: 1366, height: 741 })
    await driver.findElement(By.linkText("Add to cart")).click()
    await driver.findElement(By.linkText("Cart 1")).click()
    await driver.findElement(By.linkText("Checkout")).click()
    await driver.findElement(By.id("shipEmail")).click()
    await driver.findElement(By.id("shipEmail")).sendKeys("prueba7@correo.com")
    await driver.findElement(By.id("shipCompany")).sendKeys("company")
    await driver.findElement(By.id("shipFirstname")).sendKeys("pepe")
    await driver.findElement(By.id("shipLastname")).sendKeys("perez")
    await driver.findElement(By.id("shipAddr1")).sendKeys("calle 60 1")
    {
      const dropdown = await driver.findElement(By.id("shipCountry"))
      await dropdown.findElement(By.xpath("//option[. = 'Aruba']")).click()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.id("shipState")).click()
    await driver.findElement(By.id("shipState")).sendKeys("DC")
    await driver.findElement(By.id("shipPostcode")).click()
    await driver.findElement(By.id("shipPostcode")).sendKeys("101010")
    await driver.findElement(By.id("shipPhoneNumber")).click()
    await driver.findElement(By.id("shipPhoneNumber")).sendKeys("123456789")
    await driver.findElement(By.id("newCustomerPassword")).click()
    await driver.findElement(By.id("newCustomerPassword")).sendKeys("Muv2020-4-D*")
    await driver.findElement(By.id("createAccountCheckbox")).click()
    await driver.findElement(By.id("checkoutInformation")).click()
    {
      const elements = await driver.findElements(By.linkText("Proceed to payment"))
      assert(elements.length)
    }
  })
  it('cv-phone-empty', async function() {
    await driver.get("http://127.0.0.1:1111/")
    await driver.manage().window().setRect({ width: 1366, height: 741 })
    await driver.findElement(By.linkText("Add to cart")).click()
    await driver.findElement(By.linkText("Cart 1")).click()
    await driver.findElement(By.linkText("Checkout")).click()
    await driver.findElement(By.id("shipEmail")).click()
    await driver.findElement(By.id("shipEmail")).sendKeys("prueba7@correo.com")
    await driver.findElement(By.id("shipCompany")).sendKeys("company")
    await driver.findElement(By.id("shipFirstname")).sendKeys("pepe")
    await driver.findElement(By.id("shipLastname")).sendKeys("perez")
    await driver.findElement(By.id("shipAddr1")).sendKeys("calle 60 1")
    {
      const dropdown = await driver.findElement(By.id("shipCountry"))
      await dropdown.findElement(By.xpath("//option[. = 'Aruba']")).click()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.id("shipState")).click()
    await driver.findElement(By.id("shipState")).sendKeys("DC")
    await driver.findElement(By.id("shipPostcode")).click()
    await driver.findElement(By.id("shipPostcode")).sendKeys("101010")
    await driver.findElement(By.id("shipPhoneNumber")).click()
    await driver.findElement(By.id("shipPhoneNumber")).sendKeys("0")
    await driver.findElement(By.id("newCustomerPassword")).click()
    await driver.findElement(By.id("newCustomerPassword")).sendKeys("Muv2020-4-D*")
    await driver.findElement(By.id("createAccountCheckbox")).click()
    await driver.findElement(By.id("checkoutInformation")).click()
    {
      const elements = await driver.findElements(By.id("checkoutInformation"))
      assert(elements.length)
    }
  })
  it('cv-phone-less-9', async function() {
    await driver.get("http://127.0.0.1:1111/")
    await driver.manage().window().setRect({ width: 1366, height: 741 })
    await driver.findElement(By.linkText("Add to cart")).click()
    await driver.findElement(By.linkText("Cart 1")).click()
    await driver.findElement(By.linkText("Checkout")).click()
    await driver.findElement(By.id("shipEmail")).click()
    await driver.findElement(By.id("shipEmail")).sendKeys("prueba7@correo.com")
    await driver.findElement(By.id("shipCompany")).sendKeys("company")
    await driver.findElement(By.id("shipFirstname")).sendKeys("pepe")
    await driver.findElement(By.id("shipLastname")).sendKeys("perez")
    await driver.findElement(By.id("shipAddr1")).sendKeys("calle 60 1")
    {
      const dropdown = await driver.findElement(By.id("shipCountry"))
      await dropdown.findElement(By.xpath("//option[. = 'Aruba']")).click()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.id("shipState")).click()
    await driver.findElement(By.id("shipState")).sendKeys("DC")
    await driver.findElement(By.id("shipPostcode")).click()
    await driver.findElement(By.id("shipPostcode")).sendKeys("101010")
    await driver.findElement(By.id("shipPhoneNumber")).click()
    await driver.findElement(By.id("shipPhoneNumber")).sendKeys("12345678")
    await driver.findElement(By.id("newCustomerPassword")).click()
    await driver.findElement(By.id("newCustomerPassword")).sendKeys("Muv2020-4-D*")
    await driver.findElement(By.id("createAccountCheckbox")).click()
    await driver.findElement(By.id("checkoutInformation")).click()
    {
      const elements = await driver.findElements(By.linkText("Proceed to payment"))
      assert(elements.length)
    }
  })
  it('cv-phone-string', async function() {
    await driver.get("http://127.0.0.1:1111/")
    await driver.manage().window().setRect({ width: 1366, height: 741 })
    await driver.findElement(By.linkText("Add to cart")).click()
    await driver.findElement(By.linkText("Cart 1")).click()
    await driver.findElement(By.linkText("Checkout")).click()
    await driver.findElement(By.id("shipEmail")).click()
    await driver.findElement(By.id("shipEmail")).sendKeys("prueba7@correo.com")
    await driver.findElement(By.id("shipCompany")).sendKeys("company")
    await driver.findElement(By.id("shipFirstname")).sendKeys("pepe")
    await driver.findElement(By.id("shipLastname")).sendKeys("perez")
    await driver.findElement(By.id("shipAddr1")).sendKeys("calle 60 1")
    {
      const dropdown = await driver.findElement(By.id("shipCountry"))
      await dropdown.findElement(By.xpath("//option[. = 'Aruba']")).click()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.id("shipCountry"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.id("shipState")).click()
    await driver.findElement(By.id("shipState")).sendKeys("DC")
    await driver.findElement(By.id("shipPostcode")).click()
    await driver.findElement(By.id("shipPostcode")).sendKeys("101010")
    await driver.findElement(By.id("shipPhoneNumber")).click()
    await driver.findElement(By.id("shipPhoneNumber")).sendKeys("numero")
  })
})
