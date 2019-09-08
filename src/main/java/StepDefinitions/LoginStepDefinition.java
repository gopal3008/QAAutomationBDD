package StepDefinitions;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
//import io.github.bonigarcia.wdm.WebDriverManager;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {

	WebDriver driver;
	
@Given("^User is on QAAutomationHomePage$")
	public void user_already_on_homePage(){
	System.setProperty("webdriver.chrome.driver","C:/drivers/chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("http://automationpractice.com/index.php");
	driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
	driver.manage().window().maximize();
	driver.manage().deleteAllCookies();
	}
@When("^Title of the page is my store$")
	public void homePageTitle(){
	String homePageTitle=driver.getTitle();
	Assert.assertEquals("My Store", homePageTitle);
}
@Then("^User clicks on Sign Button$")
public void user_clicks_on_Sign_Button() throws Throwable {
	driver.findElement(By.xpath("//a[@title='Log in to your customer account']")).click();
	driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
}
@Then("^User is on signInPage$")
public void user_is_on_signInPage() throws Throwable {
	String signPageTitle = driver.getTitle();
	Assert.assertEquals("Login -My Store", signPageTitle);
}
@Then("^Close the browser$")
public void closeTheBrowser() throws Throwable {
	driver.quit();
}
	
	
	
	
	
	
	
}
