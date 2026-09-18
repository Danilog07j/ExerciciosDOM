// Ex 01 — Saudação
document.querySelector("#ex1Btn").addEventListener("click", () => {
  const nome = document.querySelector("#ex1Nome").value;
  document.querySelector("#ex1Resultado").textContent =
    `Olá, ${nome}! Seja bem-vindo!`;
});

// Ex 02 — Alterando o título
document.querySelector("#btnAlterar").addEventListener("click", () => {
  const titulo = document.querySelector("#titulo");
  titulo.textContent = "Desenvolvimento de Sistemas — SENAI";
  titulo.style.color = "#0056b3";
});

// Ex 03 — Contador de cliques
let cliques = 0;
document.querySelector("#ex3Btn").addEventListener("click", () => {
  cliques++;
  document.querySelector("#ex3Resultado").textContent = `Cliques: ${cliques}`;
});

// Ex 04 — Alterando uma mensagem
document.querySelector("#ex4Btn").addEventListener("click", () => {
  const msg = document.querySelector("#ex4Status");
  msg.textContent = "Status: Atendimento aberto";
  msg.style.color = "green";
});

// Ex 05 — Calculadora simples
document.querySelector("#ex5Btn").addEventListener("click", () => {
  const qtd = Number(document.querySelector("#ex5Qtd").value);
  const preco = Number(document.querySelector("#ex5Preco").value);
  const total = qtd * preco;
  document.querySelector("#ex5Resultado").textContent =
    `Total: R$ ${total.toFixed(2)}`;
});

// Ex 06 — Sistema de notas
document.querySelector("#ex6Btn").addEventListener("click", () => {
  const n1 = Number(document.querySelector("#ex6N1").value);
  const n2 = Number(document.querySelector("#ex6N2").value);
  const n3 = Number(document.querySelector("#ex6N3").value);
  const media = (n1 + n2 + n3) / 3;
  const status = media >= 6 ? "Aprovado" : "Reprovado";
  document.querySelector("#ex6Resultado").textContent =
    `Média: ${media.toFixed(1)} - ${status}`;
});

// Ex 07 — Validação de formulário
document.querySelector("#ex7Btn").addEventListener("click", () => {
  const nome = document.querySelector("#ex7Nome").value;
  const email = document.querySelector("#ex7Email").value;
  const senha = document.querySelector("#ex7Senha").value;
  const res = document.querySelector("#ex7Resultado");

  if (!nome || !email || !senha) {
    res.textContent = "Preencha todos os campos.";
    res.style.color = "red";
  } else {
    res.textContent = "Cadastro realizado com sucesso!";
    res.style.color = "green";
  }
});

// Ex 08 — Sistema de estoque
document.querySelector("#ex8Btn").addEventListener("click", () => {
  const disp = Number(document.querySelector("#ex8Disp").value);
  const solic = Number(document.querySelector("#ex8Solic").value);
  const res = document.querySelector("#ex8Resultado");

  if (disp >= solic) {
    res.textContent = "Pedido disponível para separação.";
    res.style.color = "green";
  } else {
    res.textContent = "Estoque insuficiente.";
    res.style.color = "red";
  }
});

// Ex 09 — Lista de tarefas
document.querySelector("#ex9Btn").addEventListener("click", () => {
  const input = document.querySelector("#ex9Tarefa");
  if (input.value) {
    const li = document.createElement("li");
    li.textContent = `☐ ${input.value}`;
    document.querySelector("#ex9Lista").appendChild(li);
    input.value = "";
  }
});

// Ex 10 — Calculadora de desconto
document.querySelector("#ex10Btn").addEventListener("click", () => {
  const preco = Number(document.querySelector("#ex10Preco").value);
  const desc = Number(document.querySelector("#ex10Desc").value);
  const valDesc = preco * (desc / 100);
  const total = preco - valDesc;
  document.querySelector("#ex10Resultado").innerHTML = `
    <p>Desconto: R$ ${valDesc.toFixed(2)}</p>
    <p><strong>Total: R$ ${total.toFixed(2)}</strong></p>
  `;
});

// Ex 11 — Sistema de login
document.querySelector("#ex11Btn").addEventListener("click", () => {
  const user = document.querySelector("#ex11User").value;
  const pass = document.querySelector("#ex11Pass").value;

  if (user === "aluno" && pass === "1234") {
    document.querySelector("#ex11Form").classList.add("oculto");
    document.querySelector("#ex11Area").classList.remove("oculto");
  } else {
    document.querySelector("#ex11Erro").textContent =
      "Usuário ou senha inválidos.";
  }
});

// Ex 12 — Carrinho de compras
const carrinho = [];
document.querySelector("#ex12Btn").addEventListener("click", () => {
  const nome = document.querySelector("#ex12Nome").value;
  const preco = Number(document.querySelector("#ex12Preco").value);

  if (nome && preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
  }
});

function atualizarCarrinho() {
  const lista = document.querySelector("#ex12Lista");
  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco;
    const li = document.createElement("li");
    li.textContent = `${item.nome} — R$ ${item.preco.toFixed(2)} `;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = () => {
      carrinho.splice(index, 1);
      atualizarCarrinho();
    };

    li.appendChild(btnRemover);
    lista.appendChild(li);
  });

  document.querySelector("#ex12Resumo").textContent =
    `Qtd: ${carrinho.length} | Total: R$ ${total.toFixed(2)}`;
}

// Ex 13 — Sistema de cadastro de alunos
document.querySelector("#ex13Btn").addEventListener("click", () => {
  const nome = document.querySelector("#ex13Nome").value;
  const idade = document.querySelector("#ex13Idade").value;
  const curso = document.querySelector("#ex13Curso").value;

  if (nome && idade && curso) {
    const tbody = document.querySelector("#ex13Tabela");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${nome}</td>
      <td>${idade}</td>
      <td>${curso}</td>
      <td><button onclick="this.closest('tr').remove()">Excluir</button></td>
    `;
    tbody.appendChild(tr);
  }
});

// Ex 14 — Dashboard de vendas
const vendas = [];
document.querySelector("#ex14Btn").addEventListener("click", () => {
  const prod = document.querySelector("#ex14Prod").value;
  const qtd = Number(document.querySelector("#ex14Qtd").value);
  const valor = Number(document.querySelector("#ex14Valor").value);

  if (prod && qtd && valor) {
    vendas.push({ prod, qtd, valor, total: qtd * valor });
    atualizarVendas();
  }
});

document.querySelector("#ex14Busca").addEventListener("input", atualizarVendas);

function atualizarVendas() {
  const busca = document.querySelector("#ex14Busca").value.toLowerCase();
  const tbody = document.querySelector("#ex14Tabela");
  tbody.innerHTML = "";

  let fat = 0,
    totalItens = 0;
  const filtradas = vendas.filter((v) => v.prod.toLowerCase().includes(busca));

  vendas.forEach((v) => {
    fat += v.total;
    totalItens += v.qtd;
  });

  filtradas.forEach((v) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${v.prod}</td><td>${v.qtd}</td><td>R$ ${v.valor.toFixed(2)}</td><td>R$ ${v.total.toFixed(2)}</td>`;
    tbody.appendChild(tr);
  });

  document.querySelector("#ex14Dash").textContent =
    `Faturamento: R$ ${fat.toFixed(2)} | Itens: ${totalItens} | Vendas: ${vendas.length}`;
}

// Ex 15 — Mini sistema acadêmico
const alunos = [];
document.querySelector("#ex15Btn").addEventListener("click", () => {
  const nome = document.querySelector("#ex15Nome").value;
  const ra = document.querySelector("#ex15RA").value;
  const curso = document.querySelector("#ex15Curso").value;
  const n1 = Number(document.querySelector("#ex15N1").value);
  const n2 = Number(document.querySelector("#ex15N2").value);

  if (nome && ra && curso) {
    const media = (n1 + n2) / 2;
    let situacao = "Aprovado";
    if (media < 4) situacao = "Reprovado";
    else if (media < 6) situacao = "Recuperação";

    alunos.push({ nome, ra, curso, media, situacao });
    atualizarAcad();
  }
});

document.querySelector("#ex15Busca").addEventListener("input", atualizarAcad);

function atualizarAcad() {
  const busca = document.querySelector("#ex15Busca").value.toLowerCase();
  const tbody = document.querySelector("#ex15Tabela");
  tbody.innerHTML = "";

  let ap = 0,
    rep = 0;
  alunos.forEach((a) => {
    if (a.situacao === "Aprovado") ap++;
    if (a.situacao === "Reprovado") rep++;
  });

  alunos
    .filter((a) => a.nome.toLowerCase().includes(busca))
    .forEach((a, i) => {
      const tr = document.createElement("tr");
      const classe = a.situacao
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      tr.innerHTML = `
      <td>${a.nome}</td>
      <td>${a.ra}</td>
      <td>${a.curso}</td>
      <td>${a.media.toFixed(1)}</td>
      <td class="${classe}">${a.situacao}</td>
      <td><button onclick="removerAluno(${i})">Excluir</button></td>
    `;
      tbody.appendChild(tr);
    });

  document.querySelector("#ex15Painel").textContent =
    `Alunos: ${alunos.length} | Aprovados: ${ap} | Reprovados: ${rep}`;
}

function removerAluno(index) {
  alunos.splice(index, 1);
  atualizarAcad();
}
