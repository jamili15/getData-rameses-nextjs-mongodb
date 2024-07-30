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

export const createExampleData = async () => {
  try {
    const db = openDb("test2", "todos");
    const groups = await db.insert({
      id: 3,
      title: "wassup world",
      number: 100,
    });
    return groups;
  } catch (err) {
    return { error: err };
  }
};

export const updateExampleData = async () => {
  try {
    const db = openDb("test2", "todos");
    const groups = await db.update(
      { id: 1 },
      { id: 1, title: "wassup world", number: 800 }
    );
    return groups;
  } catch (err) {
    return { error: err };
  }
};

export const deleteExampleData = async () => {
  try {
    const db = openDb("test2", "todos");
    const groups = await db.deleteMany({ id: 3 });
    return groups;
  } catch (err) {
    return { error: err };
  }
};

// export const getOccupancyTypeGroups = async () => {
//   const db = openDb("cloud_obo", "occupancytype");
//   const groups = await db.getList({}, { projection: { id: 1, title: 1 } });
//   console.log("groups => ", groups);
//   return groups;
// };
