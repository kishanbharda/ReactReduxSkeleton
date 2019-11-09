/**
 * Forgot password action which may be in most app
 */
import Server from '../../config/Server';

export const sendResetUrl = (email) => {
  return async (dispatch) => {
    // Api request to send password 
    dispatch({
      type: PASSWORD_SENT,
      data: response.data
    });
  }
}

export const setNewPassword = (newPassword) => {
  return async (dispatch) => {
    // Api to set new password
    dispatch({
      type: NEW_PASSWORD_SETTED,
      data: response.data
    });
  }
}
