const cadastrar = function() {
   let codigo = document.getElementById("codigo").value || "X";
   const produto = document.getElementById("produto").value || "X";
   const quantidade = parseInt(document.getElementById("quantidade").value || 0);
   const preco = parseInt(document.getElementById("preco").value|| 0);

   codigo = codigo.toUpperCase()

   const tbody = document.querySelector("tbody");
   const newRow = document.createElement("tr");

   const codCell = document.createElement("td");
   codCell.textContent = codigo;
   newRow.appendChild(codCell);

   const pdtCell = document.createElement("td");
   pdtCell.textContent = produto;
   newRow.appendChild(pdtCell);

   const qtdCell = document.createElement("td");
   qtdCell.textContent = quantidade;
   newRow.appendChild(qtdCell);

   const pntCell = document.createElement("td");
   pntCell.textContent = preco;
   newRow.appendChild(pntCell);

   tbody.appendChild(newRow);
}