import { Dimensions } from 'react-native';

// configs
import * as Consts from './consts';

/**
 * @param {*} param
 */
export const isNullOrUndefined = param => {
    return param === null || param === undefined || param === '' || param.length <= 0 ? true : false;
};

/**
 * @param {*} param
 */
export const isNullOrEmptyItems = param => {
    return param === null || param === undefined || param.length <= 0 ? true : false;
};

/**
 * url.js encode
 * @param {*} data
 */
export const urlEncode = data => {
    return data ? Object.keys(data).map(key => key + '=' + encodeURIComponent(data[key])).join('&') : '';
};

/**
 * screen type (1x, 2x, 3x)
 */
export const isScreenType = () => {
    let { width } = Dimensions.get('window');

    if (width <= 350) {
        return Consts.SCREEN_1X;
    } else if (width > 350 && width <= 500) {
        return Consts.SCREEN_2X;
    } else {
        return Consts.SCREEN_3X;
    }
};

/**
 * get size for screen type
 * @param {*} size
 */
export const getDimens = (size) => {
    return isScreenType() * size;
}

