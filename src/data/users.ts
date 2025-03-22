export type TransactionProps = {
  id: string;
  type: string;
  amount: number;
  date: string;
  status: 'sucessful' | 'failed' | 'pending';
  transaction_number: string;
  sessionId: string;
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
  referrerPoints: number;
  userHasSeenConditions: boolean;

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
    referrerPoints: 1000,
    userHasSeenConditions: true,
    piggyPoints: 40,
    showBalance: false,
    accounts: [{ savings: 100, flexNaira: 200, safeLock: 800, target: 900 }],
    transactions: [
      {
        id: '2233',
        type: 'flexNaira',
        amount: 1200,
        status: 'sucessful',
        transaction_number: '344421479408461230441571659526',
        sessionId: '34442147940846123044526',
        date: '2025/03/17',
      },
    ],
    authPin: '1234',
  },
  {
    accountNumber: '5005634616',
    email: 'mtlaw@gmail.com',
    id: '002',
    password: 'null',
    phoneNumber: '07046086074',
    fullName: 'mutairu oluwaseun',
    userName: 'mtlaw11',
    referrerPoints: 10000,
    userHasSeenConditions: true,
    piggyPoints: 40,
    showBalance: false,
    transactions: [],
    authPin: '0000',
    accounts: [
      { savings: 3000, flexNaira: 4000, safeLock: 6000, target: 7000 },
    ],
  },
];
