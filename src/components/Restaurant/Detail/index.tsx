import Dialog from '../../shared/Dialog'
import StyledDetail from './style'
import { RestaurantDetail } from '@components/Restaurant'
import { BiChevronLeft } from 'react-icons/bi'
import Loading from '@components/shared/Loading'

interface DetailProps {
  closeDialog: Function
  restaurant?: RestaurantDetail
}

function Detail({ closeDialog, restaurant }: DetailProps) {
  if (!restaurant) return <Loading />
  return (
    <StyledDetail>
      <div className="header">
        <BiChevronLeft className="arrow" onClick={e => closeDialog(e)} />
        <div className="title">{restaurant.name}</div>
      </div>
    </StyledDetail>
  )
}

export default Dialog({ ContentComponent: Detail })
