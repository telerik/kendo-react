import { employees } from "../../resources/employees";
import DashBoard from "./dashboard-page";
export default async function Page() {

  const delay = (ms) => new Promise(
    (resolve)=> setTimeout(resolve, ms)
  );

  const getEmployees = async() => {
    await delay(3000);
    return employees;
  }
  const data = await getEmployees();
  return <DashBoard employees={data}/>
}