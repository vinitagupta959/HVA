let expenses = [
    {
      id: 121,
      name: "Rent",
      amount: 1200,
      date: "12/12/2023",
    },
    {
      id: 122,
      name: "Groceries",
      amount: 150,
      date: "12/13/2023",
    },
    {
      id: 123,
      name: "Utilities",
      amount: 200,
      date: "12/14/2023",
    },
    {
      id: 124,
      name: "Entertainment",
      amount: 100,
      date: "12/15/2023",
    },
  ];
  
  // Expense class definition
  class Expense {
    constructor(id, name, amount, date) {
      this.id = id;
      this.name = name;
      this.amount = amount;
      this.date = date;
    }
    
  }
    function  displayExpenses(expenses){
      expenses.forEach(function(item){
        console.log(`${item.name}-${item.amount} (${item.date})`)
      })
    }
    
    function addExpenses(id,name,amount,date){
      let  Expense1=new Expense(id,name,amount,date)
      expenses.push(Expense1)
    
      
    }
    
    function updateExpense(id, amount) {
    const expense = expenses.find(function (expense) {
      return expense.id === id;
    });
  
    if (expense) {
      expense.amount = amount; // Update the amount if found
    }
  }
  
   function updateExpenseWithMap(id, amount) {
    expenses = expenses.map(function (expense) {
      if (expense.id === id) {
         return new Expense(expense.id, expense.name, amount, expense.date);
      }
      return expense;  
      
    });
  }
    
    function removeExpense(id){
      expense=expense.filter(function(expense){
        return expense.id !==id
      })
    }
    
    
    
    
    
    