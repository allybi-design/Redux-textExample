import { put, takeLatest } from "redux-saga/effects"

function * ageUpAsync({payload}) {
    yield put({type: "AGE_UP_ASYNC", payload })
}

export function * watchAgeUp() {
    yield takeLatest("AGE_UP", ageUpAsync)
}