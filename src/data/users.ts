type TransactionProps = {
  id: string;
  name: string;
};

export interface UserProps {
  id: string;
  fullName: string;
  email: string;
  accountNumber: string;
  phoneNumber: string | number;
  password: string;
  referrerCode?: string;
  referrerName?: string;
  userName: string;
  piggyPoints: number;
  transactions: Array<TransactionProps> | [];
  authPin: string | undefined;
  showBalance: boolean;
  accounts: Array<{
    savings: number;
    flexNaira: number;
    safeLock: number;
    target: number;
  }>;
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
    accounts: [{ savings: 100, flexNaira: 200, safeLock: 800, target: 900 }],
    transactions: [],
    authPin: undefined,
  },
  {
    accountNumber: '5005634616',
    email: 'mtlaw@gmail.com',
    id: '002',
    password: 'null',
    phoneNumber: '07046086074',
    fullName: 'mutairu oluwaseun',
    userName: 'mtlaw11',
    piggyPoints: 40,
    showBalance: false,
    transactions: [],
    authPin: undefined,
    accounts: [
      { savings: 3000, flexNaira: 4000, safeLock: 6000, target: 7000 },
    ],
  },
];
