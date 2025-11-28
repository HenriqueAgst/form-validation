const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const messageBox = document.getElementById("messageBox");
const btnSign = document.getElementById("btnSign");

btnSign.addEventListener("click", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (name === "") {
    messageBox.textContent = "Digite seu nome ";
    messageBox.className = "message error";
    return;
  }

  if (email === "") {
    messageBox.textContent = "Digite seu e-mail ";
    messageBox.className = "message error";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    messageBox.textContent = "E-mail invalido!";
    messageBox.className = "message error";
    return;
  }

  if (password === "") {
    messageBox.textContent = "Digite sua senha ";
    messageBox.className = "message error";
    return;
  }

  messageBox.textContent = "Cadastro realizado com sucesso!";
  messageBox.className = "message success";
});

nameInput.addEventListener("input", function () {
  const name = nameInput.value.trim();

  if (name === "") {
    messageBox.textContent = "Digite seu nome";
    messageBox.className = "message error";
  } else {
    messageBox.textContent = "";
    messageBox.className = "";
  }
});

emailInput.addEventListener("input", function () {
  const email = emailInput.value.trim();

  if (email === "") {
    messageBox.textContent = "Digite seu E-mail";
    messageBox.className = "message error";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    messageBox.textContent = "E-mail inválido!";
    messageBox.className = "message error";
    return;
  }

  messageBox.textContent = "";
  messageBox.className = "";
});

passwordInput.addEventListener("input", function () {
  const password = passwordInput.value.trim();

  if (password === "") {
    messageBox.textContent = "Digita sua senha";
    messageBox.className = "error message";
    return;
  }

  if (password.length < 6) {
    messageBox.textContent = "A mesangem deve conter 6 caracteres ou mais!";
    messageBox.className = "message error";
    return;
  }

  messageBox.textContent = "";
  messageBox.className = "";
});
