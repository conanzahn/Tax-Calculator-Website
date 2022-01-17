/* create a Reducer function for calculate */
import { SUBMIT_TAX } from '../constant';

const initState = [{ country: '', year: '', amount: 0 }];
export default function calculate(preState = initState, action: any) {
  const { type, data } = action;
  switch (type) {
    case SUBMIT_TAX:
      return [data];
    default:
      return preState;
  }
}
