function waitAndExecute(fun, querySelector) {
  let stateCheck = setInterval(() => {
    clearInterval(stateCheck);
    fun(querySelector);
  }, 2000);
}

function clickButton(querySelector) {
  console.log("The bear is clicking a button...");
  document.querySelector(querySelector).click();
}

function simulateMouseClickButton(querySelector) {
  var btn = document.querySelector(querySelector);
  // Attach an event handler to the button
  btn.addEventListener("click", function myClick() {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
  });

  // Click the button
  console.log("About to click like");
  btn.click();
  console.log("Just clicked like");
}

window.addEventListener("load", function () {
  console.log("Page loaded!");
  let url = window.location.toString();
  switch (url) {
    case "https://cloud.ibm.com/login":
      waitAndExecute(
        clickButton,
        "body > main > div.ibm-cloud-app.ibm-cloud-react-container > div > div > div.login-wrapper > form.login-form > div.login-form__input-rows > div.login-form__realm-user-id-row > div.login-form__user-id-wrapper.login-form__fluid-input-label.login-form__fluid-input-label--align-top > div.login-form__login-button-wrapper > button"
      );
      break;
    case "https://studip.uni-osnabrueck.de/":
      waitAndExecute(simulateMouseClickButton, "#login_button");
      break;
    case "https://w3id.sso.ibm.com/pkmslogin.form?token=Unknown":
      waitAndExecute(simulateMouseClickButton, "#btn_signin");
      break;
  }
});
