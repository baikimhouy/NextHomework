"use client";

import React, { useEffect, useState } from "react";
import BlogTable from "./DataTable";
import { columns } from "./columns";
import { BlogType } from "@/types/blogtType";

export default function BlogDashboardPage() {
  const [data, setData] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}posts`);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json.posts);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-[95%] mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-5">Blog Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BlogTable columns={columns} data={data} />
      )}
    </section>
  );
}
