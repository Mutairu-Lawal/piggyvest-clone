type TransactionProps = {
  id: string;
  name: string;
};

export interface UserProps {
  accountNumber: string;
  email: string;
  id: string;
  password: string;
  phoneNumber: string;
  fullName: string;
  promocode?: string;
  referral?: string;
  userName: string;
  balance: number;
  piggyPoints: number;
  transactions?: Array<TransactionProps>;
  showBalance: boolean;
}

export const users: Array<UserProps> = [
  {
    accountNumber: '0163810053',
    email: 'lawalmuktair@gmail.com',
    id: '001',
    password: 'none',
    phoneNumber: '07037686956',
    fullName: 'lawal Mutairu',
    userName: 'mtlaw',
    piggyPoints: 40,
    showBalance: false,
    balance: 50000,
  },
  {
    accountNumber: '5005634616',
    balance: 107000.2,
    email: 'mtlaw@gmail.com',
    id: '002',
    password: 'null',
    phoneNumber: '07046086074',
    fullName: 'mutairu oluwaseun',
    userName: 'mtlaw11',
    piggyPoints: 40,
    showBalance: false,
  },
];
