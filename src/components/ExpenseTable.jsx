function ExpenseTable({ expenses, deleteExpense }) {
    return (
      <table className="expense-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
            
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
              <td>
                <button onClick={() => deleteExpense(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  