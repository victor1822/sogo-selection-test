import * as Yup from 'yup'
import { isFuture, isDate } from 'date-fns'

const validationSchema = Yup.object().shape({
  number: Yup.string().required('Campo requerido'),
  valid_thru: Yup.string()
    .test(
      'Date validation',
      'Digite uma data válida!',
      (dateString) => {
        const choosenDate = new Date(
          dateString.split('/').reverse()
        )
        return (
          isDate(choosenDate)
          && isFuture(choosenDate)
          && !dateString.includes('_')
        )
      }
    )
})

export default validationSchema
