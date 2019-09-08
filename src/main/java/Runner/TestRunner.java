package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="/Users/gopal/workspace/AutomationQAPageBDD/src/main/java/"
				+ "Features/Login.feature",//Path of feature file
		glue = {"StepDefinitions"},//path of step definition file
		format={"pretty","html:test-output","json:json_output/cucumber.json",
				"junit:junit_xml/cucumber.xml"},//to generate different type of reporting format
		monochrome=true,//false//display the console output in a proper readable format
		strict =true,//false//to check if any step is not defined in step definitions
		dryRun=false//true//to do the dry run to check one to one mapping between gherkin tag and step definition 
				)

public class TestRunner {

}
