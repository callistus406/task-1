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

export interface InvestmentData {
  _id: string;
  name: string;
  description?: string;
  minimumAmount: number;
  interestRate: number;
  durationInMonths: number;
  createdBy: mongoose.Types.ObjectId;
}
export interface InvestmentData {
  name: string;
  description?: string;
  minimumAmount: number;
  interestRate: number;
  durationInMonths: number;
  createdBy: mongoose.Types.ObjectId;
}

export interface ICreateInvestmentPlan {
  name: string;
  description?: string;
  minimumAmount: number;
  interestRate: number;
  durationInMonths: number;
}

export interface Transaction {
  _id: string;
  wallet: string;
  user: any;
  amount: number;
  type: string;
  status: string;
  name?: string;
  email?: string;
  createdAt: string;
  updatedAt: string;
}


export interface ISubscription {
  _id: string;
  user: {
    email: string;
    first_name : string;
    last_name : string;
  }; 
  balance: number; 
  transactions: string[]; 
  createdAt: string; 
  updatedAt: string; 

}

export interface InvestmentSubscription {
  investmentPlan: string; 
  amount: number; 
  startDate: string; 
  endDate: string; 
}