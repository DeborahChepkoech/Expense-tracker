import { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({
    name: '', 
    amount: '', 
    description: '', 
    category: '', 
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!formData.name || !formData.amount || !formData.category || !formData.date) return; 

    
    addExpense({ 
      ...formData, 
      id: Date.now(), 
      date: new Date(formData.date).toLocaleDateString() 
    });
    setFormData({ name: '', amount: '', description: '', category: '', date: '' }); 
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Expense Name"
        required
      />
      <input
        name="amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Date"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
