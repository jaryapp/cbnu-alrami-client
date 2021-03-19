import { dateVar, cafeteriaNameVar,resturantNameVar } from './cache'

export const date = {
  read() {
    return dateVar()
  },
}

export const cafeteriaName = {
  read() {
    return cafeteriaNameVar()
  },
}

export const resturantName = {
  read() {
    return resturantNameVar()
  },
}
