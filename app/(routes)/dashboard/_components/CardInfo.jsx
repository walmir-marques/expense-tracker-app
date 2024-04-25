"use client";

import { PiggyBank, ReceiptText, Wallet } from "lucide-react";
import { useEffect, useState } from "react";

const CardInfo = ({ budgetList }) => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);

  useEffect(() => {
    budgetList && calculateCardInfo();
  }, [budgetList]);

  const calculateCardInfo = () => {
    let totalBudget_ = 0;
    let totalSpend_ = 0;
    budgetList.forEach((budget) => {
      totalBudget_ = totalBudget_ + Number(budget.amount);
      totalSpend_ = totalSpend_ + budget.totalSpend;
    });
    setTotalBudget(totalBudget_);
    setTotalSpend(totalSpend_);
  };

  return (
    <div>
      {budgetList ? (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-7 border rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-sm">Total em Orçamentos</h2>
              <h2 className="font-bold text-2xl">R${totalBudget}</h2>
            </div>
            <PiggyBank className="bg-purple-600 p-3 h-12 w-12 rounded-full text-white" />
          </div>
          <div className="p-7 border rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-sm">Total de Gastos</h2>
              <h2 className="font-bold text-2xl">R${totalSpend}</h2>
            </div>
            <ReceiptText className="bg-purple-600 p-3 h-12 w-12 rounded-full text-white" />
          </div>
          <div className="p-7 border rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-sm">Número de Orçamentos</h2>
              <h2 className="font-bold text-2xl">{budgetList.lenght}</h2>
            </div>
            <Wallet className="bg-purple-600 p-3 h-12 w-12 rounded-full text-white" />
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              className="h-[110px] w-full bg-slate-200 animate-pulse rounded-lg"
              key={index}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CardInfo;
