// common api
import API from './common-api';

// app configs
import { Consts } from '../../configs/app-config';

/**
 * @param {*} data 
 */
export const signInService = (data) => API.post(Consts.SIGN_IN_URL, data);

/**
 * @param {*} data 
 */
export const signUpService = (data) => API.post(Consts.SIGN_UP_URL, data);

