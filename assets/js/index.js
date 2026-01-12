// Login redirección
document.getElementById("loginform").addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple validación
  if(username === "vendedor" && password === "vendedor"){
    window.location.href = "/ventaticket/assets/html/vendedor.html";
  } else if(username === "cliente" && password === "cliente"){
    window.location.href = "/ventaticket/assets/html/cliente.html";
  } else if(username === "admin" && password === "admin"){
    window.location.href = "/ventaticket/assets/html/administrador.html";
  } else alert("Credenciales inválidas");
});