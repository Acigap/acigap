import React from 'react';
import { Link } from 'react-router-dom';

function History() {
  const transactions = [
    { id: 1, account: "123-456-789", amount: 1000, date: "2025-06-19" },
    { id: 2, account: "987-654-321", amount: 500, date: "2025-06-18" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-[var(--neutral-12)]">ประวัติการโอนเงิน</h1>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <Link
            key={transaction.id}
            to={`/transaction/${transaction.id}`}
            className="block bg-[var(--neutral-1)] p-4 rounded-lg border border-[var(--border)] hover:border-[var(--primary-blue)] transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-[var(--neutral-12)]">{transaction.account}</p>
                <p className="text-sm text-[var(--neutral-11)]">{transaction.date}</p>
              </div>
              <p className="text-lg font-semibold text-[var(--neutral-12)]">
                ฿{transaction.amount.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default History;