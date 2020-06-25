import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.transactions
      .filter(e => e.type === 'income')
      .reduce((accumulator, element) => accumulator + element.value, 0);
    const outcome = this.transactions
      .filter(e => e.type === 'outcome')
      .reduce((accumulator, element) => accumulator + element.value, 0);
    return {
      income,
      outcome,
      total: income - outcome,
    };
  }

  public create(data: CreateTransaction): Transaction {
    const { title, type, value } = data;

    const newTransaction = new Transaction({ title, type, value });

    this.transactions.push(newTransaction);

    return newTransaction;
  }
}

export default TransactionsRepository;
