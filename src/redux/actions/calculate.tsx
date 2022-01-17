/* create actions for calculate tax */
import { SUBMIT_TAX } from '../constant';
import ITaxInputs from '../../types/ITaxInputs';

export const submitTaxAction = (taxObj: ITaxInputs) => ({ type: SUBMIT_TAX, data: taxObj });
