import React from 'react';

function Transfer() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-[var(--neutral-12)]">โอนเงิน</h1>
      <div className="bg-[var(--neutral-1)] p-6 rounded-lg border border-[var(--border)]">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--neutral-11)] mb-1">
              บัญชีปลายทาง
            </label>
            <input
              type="text"
              className="w-full p-2 rounded border border-[var(--border)] bg-[var(--neutral-2)]"
              placeholder="หมายเลขบัญชี"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--neutral-11)] mb-1">
              จำนวนเงิน
            </label>
            <input
              type="number"
              className="w-full p-2 rounded border border-[var(--border)] bg-[var(--neutral-2)]"
              placeholder="0.00"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--primary-blue)] text-white py-2 px-4 rounded hover:bg-[var(--primary-blue-hover)] transition-colors"
          >
            โอนเงิน
          </button>
        </form>
      </div>
    </div>
  );
}

export default Transfer;