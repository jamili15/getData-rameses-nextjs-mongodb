"use server";

import { openDb } from "@/lib/server/db";
import { revalidatePath } from "next/cache";
import { useRef } from "react";

export const createFormData = async (formData: FormData) => {
  const name = formData.get("name") as string | null;
  const age = formData.get("age") as string | null;

  try {
    const db = openDb("test2", "todos");
    const groups = await db.insert({
      name,
      age,
    });
    revalidatePath("/");
    return groups;
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
};
