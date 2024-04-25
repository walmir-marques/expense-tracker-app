import { Trash } from "lucide-react";
import { db } from "../../../../../utils/dbConfig";
import { Expenses } from "../../../../../utils/schema";
import { toast } from "sonner";
import { eq } from "drizzle-orm";

const ExpenseListTable = ({ expensesList, refreshData }) => {
  const deleteExpense = async (expense) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expense.id))
      .returning();

    if (result) {
      refreshData();
      toast("Despesa Removida com Sucesso!");
    }
  };

  return (
    <div className="mt-3">
      <h2 className="font-bold text-lg mb-4">Últimas Despesas</h2>
      <div className="grid grid-cols-4 bg-slate-200 p-2">
        <h2>Nome</h2>
        <h2>Valor</h2>
        <h2>Data</h2>
        <h2>Deletar</h2>
      </div>
      {expensesList.map((expense) => (
        <div className="grid grid-cols-4 bg-slate-50 p-2" key={expense.id}>
          <h2>{expense.name}</h2>
          <h2>{expense.amount}</h2>
          <h2>{expense.createdAt}</h2>
          <h2>
            <Trash
              className="text-red-600 cursor-pointer"
              onClick={() => deleteExpense(expense)}
            />
          </h2>
        </div>
      ))}
    </div>
  );
};
export default ExpenseListTable;
