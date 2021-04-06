import Arrow from './Arrow'
import Date from './Date'
import Name from './Name'
import StyledSelector from './style'
import { CafeteriaNames } from '@src/constants'

function Selector() {
  const NAMES = [
    CafeteriaNames.Main,
    CafeteriaNames.YangSeong,
    CafeteriaNames.YangJin,
    CafeteriaNames.Star,
    CafeteriaNames.MilkWay,
    CafeteriaNames.Hanbit,
  ]
  
  return (
    <StyledSelector>
      <div className="date">
        <Arrow direction="left" />
        <Date />
        <Arrow direction="right" />
      </div>
      <div className="names">
        {NAMES.map(name => (
          <Name key={name} {...{ name }} />
        ))}
      </div>
    </StyledSelector>
  )
}

export default Selector
