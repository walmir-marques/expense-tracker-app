"use client";
import { useState } from "react";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/button";
import { Expenses, Budgets } from "../../../../../utils/schema";
import { toast } from "sonner";
import { db } from "../../../../../utils/dbConfig";
import moment from "moment";
import { Loader } from "lucide-react";

const AddExpense = ({ budgetId, user, refreshData }) => {
  const [name, setName] = useState();
  const [amount, setAmount] = useState(0);
  const [loading, setIsLoading] = useState(false);

  const addNewExpense = async () => {
    setIsLoading(true);
    const result = await db
      .insert(Expenses)
      .values({
        name,
        amount,
        budgetId,
        createdAt: moment().format("DD/MM/YYYY"),
      })
      .returning({ insertedId: Budgets.id });
    setAmount("");
    setName("");

    if (result) {
      setIsLoading(false);
      refreshData();
      toast("Nova Despesa Adicionada com Sucesso!");
    }
    setIsLoading(false);
  };

  return (
    <div className="border p-5 rounded-lg">
      <h2 className="font-bold text-lg">Adicionar Despesa</h2>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Nome da Despesa</h2>
        <Input
          placeholder="Ex: Supermercado"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Valor da Despesa</h2>
        <Input
          placeholder="Ex: 300"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          name={amount}
        />
      </div>
      <Button
        disabled={!(name && amount) || loading}
        className="mt-3 w-full bg-purple-600 hover:bg-purple-600/80"
        onClick={() => addNewExpense()}
      >
        {loading ? (
          <Loader className="animate-spin" />
        ) : (
          "Adicionar Nova Despesa"
        )}
      </Button>
    </div>
  );
};
export default AddExpense;
