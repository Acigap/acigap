import React from 'react';
import { useParams } from 'react-router-dom';

function TransactionDetail() {
  const { id } = useParams();
  
  // Mock transaction data - in a real app, this would come from an API
  const transaction = {
    id: parseInt(id),
    account: "123-456-789",
    amount: 1000,
    date: "2025-06-19",
    status: "สำเร็จ",
    reference: "REF" + id.padStart(8, '0')
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-[var(--neutral-12)]">รายละเอียดการโอน</h1>
      <div className="bg-[var(--neutral-1)] p-6 rounded-lg border border-[var(--border)] space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-[var(--neutral-11)]">หมายเลขอ้างอิง</p>
            <p className="font-medium text-[var(--neutral-12)]">{transaction.reference}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--neutral-11)]">สถานะ</p>
            <p className="font-medium text-green-600">{transaction.status}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--neutral-11)]">บัญชีปลายทาง</p>
            <p className="font-medium text-[var(--neutral-12)]">{transaction.account}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--neutral-11)]">จำนวนเงิน</p>
            <p className="font-medium text-[var(--neutral-12)]">
              ฿{transaction.amount.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-[var(--neutral-11)]">วันที่ทำรายการ</p>
            <p className="font-medium text-[var(--neutral-12)]">{transaction.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetail;