import { useState } from "react";
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]); 
  };

  
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id)); 
  };

  
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
