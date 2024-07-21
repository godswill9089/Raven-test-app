import routes from '../../routes/routes';
import { get, post } from '../../utils/http';

export default class SignUpService {
  static async getTransactions(payload) {
    const data = { ...payload };
    const response = await get({
      url: routes.transactions,
      data,
    });
    // if (response.status==='error') {
    //   throw new Error('Something went wrong');
    // }
    if (response.status === 'success') {
      return response.data;
    }
  }
}
