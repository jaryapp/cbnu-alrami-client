import { dateVar, cafeteriaNameVar,resturantLocationNameVar } from './cache'

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

export const resturantLocationName = {
  read() {
    return resturantLocationNameVar()
  },
}
