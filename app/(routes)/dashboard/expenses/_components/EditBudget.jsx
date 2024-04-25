"use client";

import { Button } from "../../../../../components/ui/button";
import { PenBox } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog.jsx";
import { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { Input } from "../../../../../components/ui/input";
import { db } from "../../../../../utils/dbConfig";
import { toast } from "sonner";
import { Budgets } from "../../../../../utils/schema";
import { eq } from "drizzle-orm";

const EditBudget = ({ budgetInfo, refreshData }) => {
  const [emojiIcon, setEmojiIcon] = useState();
  const [openEmojiPicker, setOpenEmojuPicker] = useState(false);
  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    if (budgetInfo) {
      setName(budgetInfo?.name);
      setAmount(budgetInfo?.amount);
      setEmojiIcon(budgetInfo?.emojiIcon);
    }
  }, [budgetInfo]);

  const onUpdateBudget = async () => {
    const result = await db
      .update(Budgets)
      .set({
        name: name,
        amount: amount,
        icon: emojiIcon,
      })
      .where(eq(Budgets.id, budgetInfo?.id))
      .returning();

    if (result) {
      refreshData();
      toast("Orçamento atualizado com sucesso!");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex gap-2 bg-purple-600 hover:bg-purple-600/80 ">
            <PenBox />
            Editar
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editando Orçamento.</DialogTitle>
            <DialogDescription>
              <div className="mt-5">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg"
                  onClick={() => {
                    setOpenEmojuPicker(!openEmojiPicker);
                  }}
                >
                  {emojiIcon}
                </Button>
                <div className="absolute z-20">
                  <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojuPicker(false);
                    }}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">
                    Nome do Orçamento
                  </h2>
                  <Input
                    placeholder="Ex: Compras"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={budgetInfo?.name}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">
                    Valor do orçamento
                  </h2>
                  <Input
                    placeholder="Ex: 2000"
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                    defaultValue={budgetInfo?.amount}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!(name && amount)}
                onClick={() => onUpdateBudget()}
                className="mt-5 w-full"
              >
                Editar Orçamento
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default EditBudget;
