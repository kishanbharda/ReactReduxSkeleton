/**
 * Most app have user signin and sign out functionality. 
 * Most used account action is here.
 */

import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import Server from '../../config/Server';
import Messages from '../../config/Messages';
import * as StorageKeys from '../constants/StorageKeys';
import * as Types from '../constants/ActionKeys';

export const getAccountInfo = () => {
  return async (dispatch) => {
    // Add code here to get account info using Server
  }
}

export const getOrders = () => {
  return async (dispatch) => {
    // Get orders code goes here 
    dispatch({
      type: Types.ORDER_FETCHED,
      orders: fetchedOrders
    });
  }
}

export const updateInfo = (param) => {
  return async (dispatch) => {
    // Update info code goes here
    dispatch({
      type: Types.USER_INFO_UPDATED,
      newInfo: newInfo
    });
  }
}

export const logoutUser = () => {
  return async (dispatch) => {
    // Make sure to clear storage when user logged out
    await AsyncStorage.clear();
    // Dipatch this and catch in reducer to clear all the reducer data. Because
    // if app is run contine you have to clear storage.
    dispatch({
      type: Types.USER_LOGGED_OUT,
    });
  }
}
