import configEnv from '../config';
import { withoutToken } from '../HttpsService';

const CEP_DATA_URL = configEnv.REACT_APP_VIACEP_API;

const getAddressByCep = async (cep) => {
  try {
    const { data } = await withoutToken.get(`${CEP_DATA_URL}/${cep}/json`);
    return data;
  } catch (e) {
    throw e.response.data.errors;
  }
};

export default getAddressByCep;
