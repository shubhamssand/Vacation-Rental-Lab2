import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import TravelerLoginReducer from "./traveler_login";
import OwnerLoginReducer from "./owner_login"
import TravelerSignUpReducer from "./traveler_signup"


const rootReducer = combineReducers({
    traveler_login: TravelerLoginReducer,
    form: formReducer,
    owner_login:OwnerLoginReducer,
    traveler_sign_up:TravelerSignUpReducer
  });
  
  export default rootReducer;