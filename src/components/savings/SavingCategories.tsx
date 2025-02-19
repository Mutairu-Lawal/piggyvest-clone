interface SavingCategoriesProps {
  balance: number;
  description: string;
  title: string;
}

export const SavingCategories = ({ balance }: SavingCategoriesProps) => {
  return (
    <div className="card">
      <div className="icon"></div>
      <p>piggyvestbank</p>
      <p>strict savings automatically. Daily, weekly or Monthly. 14% p.a</p>

      <p>
        {balance.toLocaleString('en-NG', {
          style: 'currency',
          currency: 'NGN',
        })}
      </p>
    </div>
  );
};
