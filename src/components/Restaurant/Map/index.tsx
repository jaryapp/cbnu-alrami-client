import Dialog from '../../shared/Dialog'
import { IoArrowBackOutline } from 'react-icons/io5'
import StyledMap from './style'
import NaverMap from './NaverMap'

interface MapProps {
  closeDialog: Function
}

function Map({ closeDialog }: MapProps) {
  const onSelectRestaurant = () => {
    console.log(onSelectRestaurant)
  }

  return (
    <StyledMap>
      <div className="back" onClick={() => closeDialog()}>
        <IoArrowBackOutline className="icon-back" />
      </div>
      <NaverMap {...{ onSelectRestaurant }} />
    </StyledMap>
  )
}

export default Dialog({ ContentComponent: Map })
