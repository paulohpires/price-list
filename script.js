function clicar() {
  //var sexo = document.querySelector(".sexo").value;
  var pricelist = document.querySelector(".pricelist").value;
  var a = pricelist * 0.63;
  var b = a * 0.92;
  var desc = 0.9 * 0.9 * 0.9 * 0.9 * 0.9 * 0.9 * 0.9 * b;
  var salesprice = desc;

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BLR",
    minimumFractionDigits: 2,
  });

  document.querySelector(".salesprice").innerHTML = formatter.format(desc);
}
