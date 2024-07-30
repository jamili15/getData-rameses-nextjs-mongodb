"use server";

import { openDb } from "@/lib/server/db";
import { revalidatePath } from "next/cache";

export const getExampleData = async () => {
  try {
    const db = openDb("test2", "todos");
    const groups = await db.getList({});
    return groups;
  } catch (err) {
    return { error: err };
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
  } catch (err) {
    return { error: err };
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
  } catch (err) {
    return { error: err };
  }
};

export const deleteExampleData = async ({ _id }: { _id: number | string }) => {
  try {
    const db = openDb("test2", "todos");
    const groups = await db.deleteMany({ _id: _id });
    revalidatePath("/");
    return groups;
  } catch (err) {
    return { error: err };
  }
};

// export const getOccupancyTypeGroups = async () => {
//   const db = openDb("cloud_obo", "occupancytype");
//   const groups = await db.getList({}, { projection: { id: 1, name: 1 } });
//   console.log("groups => ", groups);
//   return groups;
// };
