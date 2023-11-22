// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Register-customer-first-name', function() {
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
  it('ci-first-name-empty', async function() {
    await driver.get("http://127.0.0.1:1111//")
    await driver.manage().window().setRect({ width: 1366, height: 741 })
    await driver.findElement(By.linkText("Add to cart")).click()
    await driver.findElement(By.linkText("Cart 1")).click()
    await driver.findElement(By.linkText("Checkout")).click()
    await driver.findElement(By.id("shipEmail")).click()
    await driver.findElement(By.id("shipEmail")).sendKeys("prueba7@correo.com")
    await driver.findElement(By.id("shipCompany")).sendKeys("Campany A")
    await driver.findElement(By.id("shipFirstname")).sendKeys("")
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
    await driver.findElement(By.id("shipPhoneNumber")).sendKeys("301921212")
    await driver.findElement(By.id("newCustomerPassword")).click()
    await driver.findElement(By.id("newCustomerPassword")).sendKeys("Muv2020-4-D*")
    await driver.findElement(By.id("createAccountCheckbox")).click()
    await driver.findElement(By.id("checkoutInformation")).click()
    assert(await driver.switchTo().alert().getText() == "La cantidad de caracteres deber ser inferior a 20")
  })
  it('ci-first-name-more-20', async function() {
    await driver.get("http://127.0.0.1:1111//")
    await driver.manage().window().setRect({ width: 1366, height: 741 })
    await driver.findElement(By.linkText("Add to cart")).click()
    await driver.findElement(By.linkText("Cart 1")).click()
    await driver.findElement(By.linkText("Checkout")).click()
    await driver.findElement(By.id("shipEmail")).click()
    await driver.findElement(By.id("shipEmail")).sendKeys("prueba7@correo.com")
    await driver.findElement(By.id("shipCompany")).sendKeys("Campany A")
    await driver.findElement(By.id("shipFirstname")).sendKeys("Franklyn otro nombre mayor longitud")
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
    await driver.findElement(By.id("shipPhoneNumber")).sendKeys("301921212")
    await driver.findElement(By.id("newCustomerPassword")).click()
    await driver.findElement(By.id("newCustomerPassword")).sendKeys("Muv2020-4-D*")
    await driver.findElement(By.id("createAccountCheckbox")).click()
    await driver.findElement(By.id("checkoutInformation")).click()
    assert(await driver.switchTo().alert().getText() == "La cantidad de caracteres deber ser inferior a 20")
  })
  it('cv-first-name', async function() {
    await driver.get("http://127.0.0.1:1111//")
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
    await driver.findElement(By.id("shipPhoneNumber")).sendKeys("301921212")
    await driver.findElement(By.id("newCustomerPassword")).click()
    await driver.findElement(By.id("newCustomerPassword")).sendKeys("Muv2020-4-D*")
    await driver.findElement(By.id("createAccountCheckbox")).click()
    await driver.findElement(By.id("checkoutInformation")).click()
    {
      const elements = await driver.findElements(By.css(".col-md-5"))
      assert(elements.length)
    }
  })
})