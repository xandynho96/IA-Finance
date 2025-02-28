import { db } from "../_lib/prisma";
import { DataTable } from "@/components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "@/components/ui/add-transaction-button";
import Navbar from "@/components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/login");
  }
  const transactions = await db.transaction.findMany({
    where: { userId: userId },
  });
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6 overflow-hidden">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <ScrollArea>
          <DataTable columns={transactionColumns} data={transactions} />
        </ScrollArea>
      </div>
    </>
  );
};

export default TransactionsPage;
