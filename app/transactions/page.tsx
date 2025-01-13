import { db } from "../_lib/prisma";
import { DataTable } from "@/components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "@/components/ui/add-transaction-button";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
