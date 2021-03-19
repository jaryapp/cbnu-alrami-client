import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import MenuList from './MenuList'
import Selector from './Selector'
import StyledCafeteria from './style'

function Cafeteria() {
  return (
    <StyledCafeteria>
      <Selector />
      <MenuList />
      <Link to="/restaurant">
        <div className="nearby">
          학교 주변 맛집 보러가기
          <BiChevronRight className="arrow" />
        </div>
      </Link>
    </StyledCafeteria>
  )
}

export default Cafeteria
