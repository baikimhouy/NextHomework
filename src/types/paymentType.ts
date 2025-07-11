export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed"; // Note the specific string literals
  email: string;
};