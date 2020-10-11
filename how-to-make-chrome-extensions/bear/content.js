function clickButton(querySelector) {
  let stateCheck = setInterval(() => {
    clearInterval(stateCheck);
    console.log("clicking ibm cloud button...");
    document.querySelector(querySelector).click();
  }, 2000);
}

let url = window.location.toString();
console.log(url);
switch (url) {
  case "https://cloud.ibm.com/login":
    clickButton(
      "body > main > div.ibm-cloud-app.ibm-cloud-react-container > div > div > div.login-wrapper > form.login-form > div.login-form__input-rows > div.login-form__realm-user-id-row > div.login-form__user-id-wrapper.login-form__fluid-input-label.login-form__fluid-input-label--align-top > div.login-form__login-button-wrapper > button"
    );
    break;
  case "https://w3id.sso.ibm.com/auth/sps/auth?FedName=samlidp2&FedId=uuid564ae2bf-0164-149c-8dbf-bedb46020ff9":
    clickButton("#btn_signin");
    break;
}
