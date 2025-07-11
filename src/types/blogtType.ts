export type BlogType = {
  id: string;
  title: string;
  body: string;
  status?: "draft" | "published" | "archived"; // Optional if not always present
};
