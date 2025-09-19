"use client";

import { useEffect, useState } from "react";
import { readToken } from "@/sanity/lib/sanity.api";
import { getClient, getAllCategories } from "@/sanity/lib/sanity.client";
import { type Category } from "@/sanity/lib/sanity.queries";
import { toast } from "sonner";

// Custom hook to fetch categories
export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const client = getClient({ token: readToken });
        const fetchedCategories = await getAllCategories(client);
        setCategories(fetchedCategories);
        //console.log(fetchedCategories);
      } catch (err) {
        setError("Failed to fetch categories");
        toast.error("Failed to fetch categories");
        //console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
