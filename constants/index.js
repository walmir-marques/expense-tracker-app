import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import path from "path";

export const menuList = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutGrid,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Orçamentos",
    icon: PiggyBank,
    path: "/dashboard/budget",
  },
  {
    id: 3,
    name: "Despesas",
    icon: ReceiptText,
    path: "/dashboard/expenses",
  },
  {
    id: 4,
    name: "Upgrade",
    icon: ShieldCheck,
    path: "/dashboard/upgrade",
  },
];
