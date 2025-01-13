import { db } from "../_lib/prisma";
import { DataTable } from "@/components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "@/components/ui/add-transaction-button";

const TransactionsPage = async () => {
  // acessar as transações do meu banco de dados

  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="font-bold text-2xl">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
