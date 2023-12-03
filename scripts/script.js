function validaFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    if (nome === "") {
      alert("Por favor, preencha o campo Nome.");
      return;
    }

    if (email === "") {
      alert("Por favor, preencha o campo Email.");
      return;
    } else {
      var regexEmail = /\S+@\S+\.\S+/;
      if (!regexEmail.test(email)) {
        alert("Por favor, insira um endereço de email válido.");
        return;
      }
    }

    if (telefone === "") {
      alert("Por favor, preencha o campo Telefone.");
      return;
    } else {
      var regexTelefone = /^[0-9]+$/;
      if (!regexTelefone.test(telefone)) {
        alert("Por favor, insira apenas números no campo Telefone.");
        return;
      }
    }
    alert("Nome: " + nome + "\nEmail: " + email + "\nTelefone: " + telefone);
  }