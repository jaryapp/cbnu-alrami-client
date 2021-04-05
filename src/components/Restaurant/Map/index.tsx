import { useState, useCallback } from 'react'
import Dialog from '../../shared/Dialog'
import { IoArrowBackOutline } from 'react-icons/io5'
import StyledMap from './style'
import NaverMap from './NaverMap'
import Drawer from './Drawer'
import { RestaurantDetail } from '@components/Restaurant'

interface MapProps {
  closeDialog: Function
}

function Map({ closeDialog }: MapProps) {
  const [restaurantState, setRestaurantState] = useState<RestaurantDetail>()
  const [drawerState, setDrawerState] = useState(false)
  const onSelectRestaurant = useCallback(
    (restaurant: RestaurantDetail) => {
      setRestaurantState(restaurant)
      setDrawerState(true)
    },
    [setRestaurantState],
  )

  const handleDrawer = () => {
    setDrawerState(false)
  }

  return (
    <StyledMap>
      <div className="back" onClick={() => closeDialog()}>
        <IoArrowBackOutline className="icon-back" />
      </div>
      <div onClick={handleDrawer}>
        <NaverMap {...{ onSelectRestaurant }} />
      </div>
      {drawerState && restaurantState && <Drawer restaurant={restaurantState} />}
    </StyledMap>
  )
}

export default Dialog({ ContentComponent: Map })
