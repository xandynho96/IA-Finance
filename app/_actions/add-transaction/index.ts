"use server";

import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { db } from "@/app/_lib/prisma";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
  // Valida os parâmetros com o schema definido
  upsertTransactionSchema.parse(params);

  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (params.id) {
    await db.transaction.upsert({
      where: {
        id: params.id,
      },
      update: { ...params, userId },
      create: { ...params, userId },
    });
  } else {
    await db.transaction.create({
      data: { ...params, userId },
    });
  }

  revalidatePath("/transactions");
};
