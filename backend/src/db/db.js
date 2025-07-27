import fs from "fs/promises";
import path from "path";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const usersData = await fs.readFile(
  new URL("./users.json", import.meta.url),
  "utf-8"
);
const users = JSON.parse(usersData);

const saveUsers = () => {
  console.log(JSON.stringify(users, null, 2));
  writeFileSync(
    path.join(__dirname, "users.json"),
    JSON.stringify(users, null, 2)
  );
};

export { saveUsers, users };
