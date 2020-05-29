/* selectors */
export const getCurrentUser = (state) => state.currentUser;

/* action name creator */
const reducerName = 'currentUser';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_ADMIN_STATUS = createActionName('UPDATE_ADMIN_STATUS');

/* action creators */
export const updateAdminStatus = payload => ({ payload, type: UPDATE_ADMIN_STATUS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_ADMIN_STATUS: {
      return {
        ...statePart,
        isAdmin: action.payload,
      };
    }
    default:
      return statePart;
  }
}
