import {
  PiggyBank,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCard {
  month: string;
  balance: number;
  depositTotal: number;
  investmentTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  depositTotal,
  investmentTotal,
  expensesTotal,
}: SummaryCard) => {
  return (
    <div className="space-y-6 ">
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBank size={16} />}
          title="Investido"
          amount={investmentTotal}
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
          amount={expensesTotal}
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesa"
          amount={depositTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
