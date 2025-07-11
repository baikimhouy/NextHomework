// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import { PaymentTable } from "@/components/payment-table";
import { Input } from "@/components/ui/input";
import { paymentColumns } from "@/components/payment-columns";
import { Payment } from "@/types/paymentType";

// In your dashboard/page.tsx
const data: Payment[] = [
  {
    id: "1",
    amount: 100,
    status: "success",  // or "processing", "failed", "pending"
    email: "user@example.com"
  },
  // ...
];
export default function DashboardPage() {
  const [filter, setFilter] = useState("");

  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <PaymentTable columns={paymentColumns} data={data} />
    </div>
  );
}
