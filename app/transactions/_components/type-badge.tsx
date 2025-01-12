import { Badge } from "@/components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted text-primary hover:bg-muted font-bold">
        <CircleIcon className=" fill-primary mr-2" size={10} />
        Ganho
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="font-bold text-danger bg-danger bg-opacity-10">
        <CircleIcon className=" fill-destructive mr-2" size={10} />
        Gasto
      </Badge>
    );
  }
  return (
    <Badge className="font-bold text-white bg-white bg-opacity-10">
      <CircleIcon className=" fill-white mr-2" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
