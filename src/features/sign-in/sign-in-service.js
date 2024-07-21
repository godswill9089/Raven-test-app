import routes from '../../routes/routes';
import { post } from '../../utils/http';

export default class SignUpService {
  static async signIn(payload) {
    const data = { ...payload };
    const response = await post({
      url: routes.signUp,
      data,
    });
    if (!response.success) {
      throw new Error('Something went wrong');
    }
    if (response.success) {
      return response;
    }
  }
}
