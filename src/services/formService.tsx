"use server";

import { openDb } from "@/lib/server/db";
import { revalidatePath } from "next/cache";

export const getExampleData = async (queryParams: any) => {
  const search = queryParams.search || "";
  try {
    const db = openDb("test2", "todos");
    const query = search ? { name: { $regex: search, $options: "i" } } : {};
    const groups = await db.getList(query);
    return groups;
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
};

export const getFormData = async () => {
  try {
    const db = openDb("pageflow", "formdata");
    const groups = await db.getList({});
    const groupsPlainObj = groups.map((group: any) => ({
      ...group,
    }));
    return groups;
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
};

export const createExampleData = async ({
  name,
  age,
}: {
  name: string;
  age: number | null;
}) => {
  try {
    const db = openDb("test2", "todos");
    const groups = await db.insert({
      name: name,
      age: age,
    });
    revalidatePath("/");
    return groups;
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
};

export const createFormData = async (formData: Record<string, any>) => {
  try {
    const db = openDb("pageflow", "formdata");
    const groups = await db.insert(formData);
    revalidatePath("/");
    return groups;
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
};

export const updateExampleData = async ({
  _id,
  name,
  age,
}: {
  _id: number | string;

  name: string;
  age: number | null;
}) => {
  try {
    const db = openDb("test2", "todos");
    const groups = await db.replace({ _id: _id }, { name: name, age: age });

    revalidatePath("/");
    return groups;
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
};

export const deleteExampleData = async ({ _id }: { _id: number | string }) => {
  try {
    const db = openDb("test2", "todos");
    const groups = await db.deleteMany({ _id: _id });
    revalidatePath("/");
    return groups;
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
};

// export const getOccupancyTypeGroups = async () => {
//   const db = openDb("cloud_obo", "occupancytype");
//   const groups = await db.getList({}, { projection: { id: 1, name: 1 } });
//   console.log("groups => ", groups);
//   return groups;
// };
