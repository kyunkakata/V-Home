// common api
import API from './common-api';

// app configs
import { Consts } from '../../configs/app-config';

export const getData = (data) => API.get('https://jsonplaceholder.typicode.com/posts?userId=' + data.payload.id);