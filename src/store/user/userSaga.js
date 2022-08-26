import { call, all, takeLatest, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./userTypes";
import { signInSuccess, signInFailure, googleSignIn } from "./userActions";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGoogle,
} from "../../utils/Firebase/Firebase";

export function* getSnapshopFromAuthUser(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    console.log(userSnapshot);
    console.log(userSnapshot.data);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshopFromAuthUser, userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION);
}

// export function* onGoogleSignInStart() {
//   yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
// }

export function* userSagas() {
  yield all(call[onCheckUserSession]);
}
