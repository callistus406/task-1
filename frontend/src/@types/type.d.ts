export interface MenuItem {
    label: string;
    to: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    subItems?: SubItem[];
}
  
export interface ILogin {
  email: string;
  password: string;
}
export interface IRegistration {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface ICreateInvestment {
  name: string;
  description?: string;
  minimumAmount: number;
  interestRate: number;
  durationInMonths: number;
}

export interface IUpdateProfile {
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
}

export interface InvestmentData{
    name: string;
    description?: string;
    minimumAmount: number;
    interestRate: number;
    durationInMonths: number;
    createdBy: mongoose.Types.ObjectId; 
  
}