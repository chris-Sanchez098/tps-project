// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('create_user', function() {
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
  it('CI_INVALID_EMAIL1', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.css(".nav-item:nth-child(7) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("usersName")).sendKeys("admin1@gmail.com")
    await driver.findElement(By.id("userPassword")).sendKeys("admin1")
    await driver.findElement(By.css(".col-md-9")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("usersName")).click()
    await driver.findElement(By.id("usersName")).sendKeys("User")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("@correo.com")
    await driver.findElement(By.css(".col-12:nth-child(1)")).click()
    await driver.findElement(By.id("userPassword")).sendKeys("Contrase123")
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).click()
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).sendKeys("Contrase123")
    await driver.findElement(By.id("btnUserAdd")).click()
    assert(await driver.findElement(By.id("notify_message")).getText() == "Please enter an email address")
  })
  it('CI_INVALID_EMAIL2', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.css(".nav-item:nth-child(7) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("usersName")).sendKeys("admin1@gmail.com")
    await driver.findElement(By.id("userPassword")).sendKeys("admin1")
    await driver.findElement(By.css(".col-md-9")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("usersName")).click()
    await driver.findElement(By.id("usersName")).sendKeys("User")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("pepito18@correo")
    await driver.findElement(By.css(".col-12:nth-child(1)")).click()
    await driver.findElement(By.id("userPassword")).sendKeys("Contrase123")
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).click()
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).sendKeys("Contrase123")
    await driver.findElement(By.id("btnUserAdd")).click()
    assert(await driver.findElement(By.id("notify_message")).getText() == "Please enter an email address")
  })
  it('CI_INVALID_EMAIL3', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.css(".nav-item:nth-child(7) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("usersName")).sendKeys("admin1@gmail.com")
    await driver.findElement(By.id("userPassword")).sendKeys("admin1")
    await driver.findElement(By.css(".col-md-9")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("usersName")).click()
    await driver.findElement(By.id("usersName")).sendKeys("User")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("\\n")
    await driver.findElement(By.css(".col-12:nth-child(1)")).click()
    await driver.findElement(By.id("userPassword")).sendKeys("Contrase123")
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).click()
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).sendKeys("Contrase123")
    await driver.findElement(By.id("btnUserAdd")).click()
  })
  it('CI_INVALID_EMAIL4', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.css(".nav-item:nth-child(7) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("usersName")).sendKeys("admin1@gmail.com")
    await driver.findElement(By.id("userPassword")).sendKeys("admin1")
    await driver.findElement(By.css(".col-md-9")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("usersName")).click()
    await driver.findElement(By.id("usersName")).sendKeys("User")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("pepito183@")
    await driver.findElement(By.css(".col-12:nth-child(1)")).click()
    await driver.findElement(By.id("userPassword")).sendKeys("Contrase123")
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).click()
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).sendKeys("Contrase123")
    await driver.findElement(By.id("btnUserAdd")).click()
  })
  it('CI_INVALID_PASSWORD', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.css(".nav-item:nth-child(7) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("usersName")).sendKeys("admin1@gmail.com")
    await driver.findElement(By.id("userPassword")).sendKeys("admin1")
    await driver.findElement(By.css(".col-md-9")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("usersName")).click()
    await driver.findElement(By.id("usersName")).sendKeys("User")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("pepito18@correo.com")
    await driver.findElement(By.css(".col-12:nth-child(1)")).click()
    await driver.findElement(By.id("userPassword")).sendKeys("Str16")
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).click()
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).sendKeys("Str16")
    await driver.findElement(By.id("btnUserAdd")).click()
    assert(await driver.findElement(By.id("notify_message")).getText() == "Invalid password")
  })
  it('CI_INVALID_PASSWORD_CONFIRM', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.css(".nav-item:nth-child(7) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("usersName")).sendKeys("admin1@gmail.com")
    await driver.findElement(By.id("userPassword")).sendKeys("admin1")
    await driver.findElement(By.css(".col-md-9")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("usersName")).click()
    await driver.findElement(By.id("usersName")).sendKeys("User")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("pepito18@correo.com")
    await driver.findElement(By.css(".col-12:nth-child(1)")).click()
    await driver.findElement(By.id("userPassword")).sendKeys("Contrase123")
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).click()
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).sendKeys("Str1687")
    await driver.findElement(By.id("btnUserAdd")).click()
  })
  it('CI_INVALID_USER', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.css(".nav-item:nth-child(7) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("usersName")).sendKeys("admin1@gmail.com")
    await driver.findElement(By.id("userPassword")).sendKeys("admin1")
    await driver.findElement(By.css(".col-md-9")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("usersName")).click()
    await driver.findElement(By.id("usersName")).sendKeys("U")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("pepito180@correo.com")
    await driver.findElement(By.css(".col-12:nth-child(1)")).click()
    await driver.findElement(By.id("userPassword")).sendKeys("Contrase123")
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).click()
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).sendKeys("Contrase123")
    await driver.findElement(By.id("btnUserAdd")).click()
    assert(await driver.findElement(By.id("notify_message")).getText() == "Invalid Users name")
  })
  it('CI_PASSWORD_CONFIRM_EMPTY', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.css(".nav-item:nth-child(7) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("usersName")).sendKeys("admin1@gmail.com")
    await driver.findElement(By.id("userPassword")).sendKeys("admin1")
    await driver.findElement(By.css(".col-md-9")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("usersName")).click()
    await driver.findElement(By.id("usersName")).sendKeys("User")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("pepito18@correo.com")
    await driver.findElement(By.css(".col-12:nth-child(1)")).click()
    await driver.findElement(By.id("userPassword")).sendKeys("Contrase123")
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).click()
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).sendKeys("\\n")
    await driver.findElement(By.id("btnUserAdd")).click()
  })
  it('CI_PASSWORD_EMPTY', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.css(".nav-item:nth-child(7) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("usersName")).sendKeys("admin1@gmail.com")
    await driver.findElement(By.id("userPassword")).sendKeys("admin1")
    await driver.findElement(By.css(".col-md-9")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("usersName")).click()
    await driver.findElement(By.id("usersName")).sendKeys("User")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("pepito18@correo.com")
    await driver.findElement(By.css(".col-12:nth-child(1)")).click()
    await driver.findElement(By.id("userPassword")).sendKeys("\\n")
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).click()
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).sendKeys("\\n")
    await driver.findElement(By.id("btnUserAdd")).click()
  })
  it('CI_USER_EMPTY', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.css(".nav-item:nth-child(7) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("usersName")).sendKeys("admin1@gmail.com")
    await driver.findElement(By.id("userPassword")).sendKeys("admin1")
    await driver.findElement(By.css(".col-md-9")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("usersName")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("pepito180@correo.com")
    await driver.findElement(By.css(".col-12:nth-child(1)")).click()
    await driver.findElement(By.id("userPassword")).sendKeys("Contrase123")
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).click()
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).sendKeys("Contrase123")
    await driver.findElement(By.id("btnUserAdd")).click()
  })
  it('CV', async function() {
    await driver.get("http://localhost:1111/admin/dashboard")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.findElement(By.css(".nav-item:nth-child(7) > .sidebar-link-addon")).click()
    await driver.findElement(By.id("usersName")).sendKeys("admin1@gmail.com")
    await driver.findElement(By.id("userPassword")).sendKeys("admin1")
    await driver.findElement(By.css(".col-md-9")).click()
    await driver.findElement(By.id("usersName")).sendKeys("\\n")
    await driver.findElement(By.id("usersName")).click()
    await driver.findElement(By.id("usersName")).sendKeys("User")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("pepito18@correo.com")
    await driver.findElement(By.css(".col-12:nth-child(1)")).click()
    await driver.findElement(By.id("userPassword")).sendKeys("Contrase123")
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).click()
    await driver.findElement(By.css("#userNewForm > .form-group:nth-child(4) > .form-control")).sendKeys("Contrase123")
    await driver.findElement(By.id("btnUserAdd")).click()
  })
})