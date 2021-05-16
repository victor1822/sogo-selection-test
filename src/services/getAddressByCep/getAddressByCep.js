import { withoutToken } from '../HttpsService'

const getAddressByCep = async (cep) => {
  try {
    const { data } = await withoutToken.get(`https://viacep.com.br/ws/${cep}/json`)
    return data
  } catch (e) {
    throw e.response.data.errors
  }
}

export default getAddressByCep
