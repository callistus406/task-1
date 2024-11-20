import config from "../config/config";
import { IRegistration } from "../@types/types";
import UsersModel from "../db/models/user.model";


const createAdmin = async (data: IRegistration) => {
  const isFound = await UsersModel.findOne({ email: data.email });
  if (!isFound) {
    
    const isCreated = await UsersModel.create({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
    is_verified: true,
    hashed_password: data.password,
   
    role: config.roles.admin,
  });
  
  return isCreated;
  } else {
    return null
}
};

export default { createAdmin };
