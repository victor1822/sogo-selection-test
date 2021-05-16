import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Campo requerido'),
  cpf: Yup.string()
    .test(
      'cpf validation',
      'Campo requerido!',
      (cpfString) => (
        cpfString.length > 0
      && !cpfString.includes('_')
      )
    ),
  email: Yup.string().required('Campo requerido!').email('Digite um e-mail válido!'),
  cep: Yup.string()
    .test(
      'cep validation',
      'Campo requerido!',
      (cepString) => (
        cepString.length > 0
      && !cepString.includes('_')
      )
    ),
  address: Yup.string().required('Campo requerido'),
  number: Yup.string().required('Campo requerido'),
  neighbourhood: Yup.string().required('Campo requerido'),
  city: Yup.string().required('Campo requerido'),
  state: Yup.string().required('Campo requerido')
})

export default validationSchema
