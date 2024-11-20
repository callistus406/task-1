import { hashPassword } from "../utils/bcrypt";
import adminTasks from "./createAdmin";

export async function createSuperAdmin() {
  const hashed_password = await hashPassword("Qwerty123#")
  const info = await adminTasks.createAdmin({
    email: "admin@gmail.com",
    first_name: "admin001",
    last_name: "sudo",
    
    phone: "+2345794576839",
    password: hashed_password,
  });
  if (info) {
    console.log("Admin created");
  } else {
    console.log("duplicate entry detected");
  }
}
