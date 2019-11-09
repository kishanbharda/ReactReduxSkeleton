/**
 * All app have home page and need some data for home
 */

import axios from 'axios';
import Server from '../../config/Server';

const getHomePage = () => {
  return async (dispatch) => {
    // Api request to get home page data
    dispatch({
      type: HOME_PAGE_FETCHED,
      data: response.data
    });
  }
}

export default getHomePage
