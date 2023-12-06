import Planning from "./planning-page";
import { employees } from "../../resources/employees";
export default async function Page() {
  const delay = (ms) => new Promise(
    (resolve)=> setTimeout(resolve, ms)
  );

  const getEmployees = async() => {
    await delay(1000);
    return employees;
  }
  const data = await getEmployees();
  return (
    <Planning employees={data}/>
  )
}