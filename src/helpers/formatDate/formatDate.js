import { isFuture, isBefore } from 'date-fns'

export function formatDate(date) {
  return new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
}

export function unMaskDate(date) {
  return new Date(
    date.split('/')[2],
    date.split('/')[1] - 1,
    date.split('/')[0]
  ).toISOString()
}

const now = new Date()
export const ONE_DAY_IN_MILLIS = 1000 * 60 * 60 * 24

export const isBeforeSevenDaysFromNow = (date) => isBefore(date, new Date(now.getTime() + 7 * ONE_DAY_IN_MILLIS))
  && isFuture(date)
export const isBeforeFifteenDaysFromNow = (date) => isBefore(date, new Date(now.getTime() + 15 * ONE_DAY_IN_MILLIS))
  && isFuture(date)
export const isBeforeThirtyDaysFromNow = (date) => isBefore(date, new Date(now.getTime() + 30 * ONE_DAY_IN_MILLIS))
  && isFuture(date)
