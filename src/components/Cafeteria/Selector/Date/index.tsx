import { useReactiveVar } from '@apollo/client'

import StyledDate from './style'
import { dateVar } from '@src/apollo/cache'
import { fullFormatDate } from '@src/utils/day'

function Date() {
  const date = useReactiveVar(dateVar)
  return <StyledDate>{fullFormatDate(date)}</StyledDate>
}

export default Date
