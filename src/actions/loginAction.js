import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import * as Types from '../constants/ActionKeys';
import Server from '../../config/Server';
import * as StorageKeys from '../constants/StorageKeys';

/**
 * Login the user
 * @param {String} email User Email address
 * @param {String} password User Password
 * @returns {Promise<{isValid: Boolean, message: String}>} Return the promiss 
 */
export const login = (email: String, password: String): Promise<{ isValid: Boolean, accessToken: String, message: String }> => {
  return async (dispatch) => {
    try {
      const response = await axios.post(Server.url, query, { headers: Server.header });
      if (response.data.customerAccessToken) {
        const { accessToken } = response.data.customerAccessToken;
        AsyncStorage.setItem(StorageKeys.IS_AUTHENTICATED_USER, StorageKeys.USER_AUTHENTICATED);
        AsyncStorage.setItem(StorageKeys.USER_ACCESS_TOKEN, accessToken);
        dispatch({
          type: Types.USER_AUTHENTICATED
        })
        return {
          isValid: true,
          accessToken,
          message: null
        }
      }
      return {
        isValid: false,
        accessToken: null,
        message: "Username or Password is invalid"
      }
    } catch (error) {
      return {
        isValid: false,
        accessToken: null,
        message: error.message
      }
    }
  }
}

export const setUserData = (accessToken): Promise<{ isSetted: Boolean }> => {
  return async (dispatch) => {
    try {
      const response = await axios.post(Server.url, customerDetailQuery, { headers: Server.header });
      await AsyncStorage.setItem(StorageKeys.USER_DATA, JSON.stringify(response.data.customer));
      dispatch({
        type: Types.SET_USER_DATA,
        data: response.data.data.customer
      });
      return {
        isSetted: true,
        id: response.data.data.customer.id
      }
    } catch (error) {
      return {
        isSetted: false
      }
    }
  }
}
