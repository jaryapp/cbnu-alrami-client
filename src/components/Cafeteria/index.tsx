import { BiChevronRight } from 'react-icons/bi'

import MenuList from './MenuList'
import Selector from './Selector'
import StyledCafeteria from './style'
import RestaurantDialog from '../Restaurant'

function Cafeteria() {
  let openDialog: Function
  const openCallback = (cb: Function) => {
    openDialog = cb
  }

  return (
    <StyledCafeteria>
      <Selector />
      <MenuList />
      <div className="nearby" onClick={() => openDialog()}>
        학교 주변 맛집 보러가기
        <BiChevronRight className="arrow" />
      </div>
      <RestaurantDialog {...{ openCallback }} />
    </StyledCafeteria>
  )
}

export default Cafeteria
