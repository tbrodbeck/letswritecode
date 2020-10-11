let stateCheck = setInterval(() => {
  if (document.readyState === "complete") {
    clearInterval(stateCheck);
    console.log("clicking ibm cloud button...");
    document
      .querySelector(
        "body > main > div.ibm-cloud-app.ibm-cloud-react-container > div > div > div.login-wrapper > form.login-form > div.login-form__input-rows > div.login-form__realm-user-id-row > div.login-form__user-id-wrapper.login-form__fluid-input-label.login-form__fluid-input-label--align-top > div.login-form__login-button-wrapper > button"
      )
      .click();
  }
}, 2000);
