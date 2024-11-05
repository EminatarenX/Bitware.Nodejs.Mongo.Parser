import { deleteAll, findAll, parseAndSaveUsers } from "./src/find-create-users";

async function main() {
  await deleteAll();
  const result = await parseAndSaveUsers("./usuarios.csv");
  const users = await findAll();
  const viewFormated = true;
  if (!viewFormated) {
    console.log({ result: result, user: JSON.stringify(users) });
  } else {
    console.log({ result: result, user: users });
  }
}

main();
