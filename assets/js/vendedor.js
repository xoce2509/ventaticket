// Guardar Ventas
document.getElementById("ventaForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const cliente = document.getElementById("cliente").value;
    const numero = document.getElementById("numero").value;
    const precio = document.getElementById("precio").value;
    const ventas = JSON.parse(localStorage.getItem("ventas")) || [];
    ventas.push({cliente, numero, precio});
    localStorage.setItem("ventas", JSON.stringify(ventas));
    mostrarVentas();
});

function mostrarVentas(){
  const ventas = JSON.parse(localStorage.getItem("ventas")) || [];
  const lista = document.getElementById("listaVentas");
  if(lista){
    lista.innerHTML = "";
    ventas.forEach((v,i) => {
      const li = document.createElement("li");
      li.textContent = `Venta #${i+1}: Número ${v.numero}, Precio C$${v.precio}`;
      lista.appendChild(li);
    });
  }
}