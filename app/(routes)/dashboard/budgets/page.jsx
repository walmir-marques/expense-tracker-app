import BudgetList from "./_components/BudgetList.jsx";

const BudgetPage = () => {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">Meus Orçamentos</h2>
      <BudgetList />
    </div>
  );
};
export default BudgetPage;
