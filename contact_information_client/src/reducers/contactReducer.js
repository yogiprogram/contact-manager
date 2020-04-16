import {FETCH_CONTACTS} from "../actions/types";

export default function (state = null, action) {
    if (action.type === FETCH_CONTACTS) {
        return action.payload || false;
    } else {
        return state;
    }
}
