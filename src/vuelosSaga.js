import { call, put, take, takeEvery} from "redux-saga/effects";
import { getVuelosFetch, getVuelosSuccess } from "./vuelosState";

function* workGetVuelosFetch(){
    const vuelos = yield call(() => fetch('http://renedev.com/hyperdrive/public/api/v1/orders'));
    const traerVuelos = yield vuelos.json();
    yield put(getVuelosSuccess(traerVuelos.data));
}

function* vuelosSaga(){
    yield takeEvery('vuelos/getVuelosFetch',workGetVuelosFetch );
}

export default vuelosSaga;