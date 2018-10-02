import { AsyncStorage } from 'react-native';

// configs
import * as Utils from './utils';

/**
 * @param {*} key 
 * @param {*} value 
 */
export const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error);
    }
};

/**
 * @param {*} key 
 */
export const getData = async (key) => {
    let value = null;

    try {
        value = await AsyncStorage.getItem(key);
    } catch (error) {
        console.log(error);
    }

    return value;
};

/**
 * @param {*} key 
 * @param {*} value 
 */
export const setDataJson = async (key, value) => {
    try {
        if (!Utils.isNullOrUndefined(value)) {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } else {
            await AsyncStorage.setItem(key, null);
        }
    } catch (error) {
        console.log(error);
    }
};

/**
 * @param {*} key 
 */
export const getDataJson = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (!Utils.isNullOrUndefined(value)) {
            return JSON.parse(value);
        }
    } catch (error) {
        console.log(error);
    }

    return null;
};

/**
 * @param {*} key 
 */
export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
};
