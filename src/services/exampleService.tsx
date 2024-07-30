import { openDb } from "@/lib/server/db";

export const getExampleData = async () => {
  try {
    const db = openDb("test2", "todos");
    const groups = await db.getList({});
    console.log("GROUPS", groups);
    return groups;
  } catch (err) {
    return { code: "404", error: err };
  }
};

// export const getOccupancyTypeGroups = async () => {
//   const db = openDb("cloud_obo", "occupancytype");
//   const groups = await db.getList({}, { projection: { id: 1, title: 1 } });
//   console.log("groups => ", groups);
//   return groups;
// };
