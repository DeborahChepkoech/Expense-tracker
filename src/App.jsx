import { useState } from "react";
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Add expense to the list
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]); // Add new expense to the list
  };

  // Delete expense from the list
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id)); // Filter out the deleted expense
  };

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(expense => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable 
        expenses={filteredExpenses} 
        deleteExpense={deleteExpense} 
      />
    </div>
  );
}

export default App;
