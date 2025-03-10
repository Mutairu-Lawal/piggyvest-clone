interface Transactions {
  id: string;
}

export interface UserInterface {
  email: string;
  id: string;
  phoneNumber: string;
  fullName: string;
  promocode: string;
  referral: string;
  accountNumber: string;
  userName: string;
  piggyPoints: number;
  transactions: Array<Transactions>;
}

export type ToggleStateProps = {
  setStateAction: React.Dispatch<React.SetStateAction<boolean>>;
};
