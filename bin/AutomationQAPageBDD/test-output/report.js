$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/gopal/workspace/AutomationQAPageBDD/src/main/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "QAAugomtaionPageLogin",
  "description": "",
  "id": "qaaugomtaionpagelogin",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "QAAutomationHomePageCheck",
  "description": "",
  "id": "qaaugomtaionpagelogin;qaautomationhomepagecheck",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on QAAutomationHomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the page is my store",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Sign Button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on signInPage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_homePage()"
});
formatter.result({
  "duration": 63527588998,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.homePageTitle()"
});
formatter.result({
  "duration": 23419434,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Sign_Button()"
});
formatter.result({
  "duration": 3903531099,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_signInPage()"
});
formatter.result({
  "duration": 66140057,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cLogin -[]My Store\u003e but was:\u003cLogin -[ ]My Store\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDefinitions.LoginStepDefinition.user_is_on_signInPage(LoginStepDefinition.java:40)\r\n\tat ✽.And User is on signInPage(/Users/gopal/workspace/AutomationQAPageBDD/src/main/java/Features/Login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.closeTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
});