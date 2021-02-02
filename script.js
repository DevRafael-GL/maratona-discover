const Modal = {
  openAndClose() {
    // Abrir & fechar modal
    // Adicionar a class active ao modal
    document.querySelector(".modal-overlay").classList.toggle("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: "Website",
    amount: 500000,
    date: "23/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "23/01/2021",
  },
];

const Transaction = {
  all: transactions,

  add(transaction) {
    Transaction.all.push(transaction)
    
    App.reload();
  },

  incomes() {
    let income = 0;
    // para cada transação
    Transaction.all.forEach(transaction => {
      // Se ela for MAIOR que zero
      if(transaction.amount > 0) {
        //Somar a uma variavel e retornar a variavel
        income += transaction.amount;
      }
    })
    // Se for MAIOS que 0
    // Somar a uma variavel e retornar a variavel

    return income;
  },

  expenses() {
    let expense = 0;
    // para cada transação
    Transaction.all.forEach(transaction => {
      // Se ela for MENOR que zero
      if(transaction.amount < 0) {
        //Somar a uma variavel e retornar a variavel
        expense += transaction.amount;
      }
    })

    return expense;
  },

  total() {
    return Transaction.incomes() + Transaction.expenses()
  },
};

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),
  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);
    DOM.transactionsContainer.appendChild(tr);
  },

  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `  
    <td class="description">${transaction.description}</td>
    <td class="${CSSclass}">${amount}</td>
    <td class="date">${transaction.date}</td>
    <td>
      <img src="./assets/minus.svg" alt="Remover transação">
    </td>

    `;
    return html;
  },

  updadeBalance() {
    document
    .getElementById('incomeDisplay')
    .innerHTML = Utils.formatCurrency(Transaction.incomes())
    document
    .getElementById('expenseDisplay')
    .innerHTML = Utils.formatCurrency(Transaction.expenses())
    document
    .getElementById('totalDisplay')
    .innerHTML = Utils.formatCurrency(Transaction.total())
  },

  clearTransactions() {
    DOM.transactionsContainer.innerHTML = ""
  }
 
};

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return signal + value;
  },
};

const App = {
  init() {
    Transaction.all.forEach(transaction => {
      DOM.addTransaction(transaction);
    });
    
    DOM.updadeBalance()
  },

  reload() {
    DOM.clearTransactions()
    App.init()
  }
}

App.init()

Transaction.add({
  id: 39,
  description: "Alo",
  amount:200,
  date:'23/01/2021'
})



