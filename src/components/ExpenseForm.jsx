import { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({ name: '', amount: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount) return;

    addExpense({ ...formData, id: Date.now() });
    setFormData({ name: '', amount: '', description: '' });
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
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
