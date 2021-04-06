import Dialog from '../../shared/Dialog'
import StyledDetail from './style'
import { RestaurantDetail } from '@components/Restaurant'
import { BiChevronLeft } from 'react-icons/bi'

interface DetailProps {
  restaurant: RestaurantDetail
  openCallback: Function
}

function Detail({ restaurant, openCallback }: DetailProps) {
  const ContentComponent = ({ closeDialog }: { closeDialog: Function }) => (
    <StyledDetail>
      <div className="header">
        <BiChevronLeft className="arrow" onClick={e => closeDialog(e)} />
        <div className="title">{restaurant.name}</div>
      </div>
    </StyledDetail>
  )

  return Dialog({ ContentComponent })({ openCallback })
}

export default Detail
