import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(data: RequestDTO): Transaction {
    const { title, value, type } = data;

    if (type !== 'outcome') {
      if (type !== 'income') {
        throw Error('Esse type não existe!');
      }
    }

    if (type === 'outcome') {
      const balance = this.transactionsRepository.getBalance();

      if (balance.total < value) {
        throw Error('Valor indisponivel para saque!');
      }
    }

    const newTrasaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return newTrasaction;
  }
}

export default CreateTransactionService;
