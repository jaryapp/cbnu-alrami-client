import { makeVar } from '@apollo/client'

export const dateVar = makeVar<Date>(new Date())
export const cafeteriaNameVar = makeVar<String>('본관')
export const resturantNameVar = makeVar<String>('중문')
