import { create } from 'apisauce';

// app configs
import { Consts } from '../../configs/app-config';

// create api sauce
const API = create({
    baseURL: Consts.BASE_URL,
    timeout: Consts.API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

API.addRequestTransform(transform => {
    console.log('=============start-transform=============================');
    console.log(transform);
    console.log('=============end-transform=============================');
});

// Monitor API
API.addMonitor(response => {
    console.log('============================start-monitor==========================');
    console.log(response);
    console.log('============================end============================');
});

// Response Transforms
API.addResponseTransform(response => {
    console.log('============================response==========================');
    console.log(response);
    console.log('============================end============================');
});

export default API;
