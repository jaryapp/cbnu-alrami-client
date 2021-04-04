import { useState, useCallback } from 'react'
import Dialog from '../../shared/Dialog'
import { IoArrowBackOutline } from 'react-icons/io5'
import StyledMap from './style'
import NaverMap from './NaverMap'
import Drawer from './Drawer'

interface MapProps {
  closeDialog: Function
}
interface Menu {
  menu: string
  price: number
}
interface RestaurantDetail {
  address: string
  location: string
  longitude: number
  latitude: number
  name: string
  details: Menu[]
  time: string
  break: string
}

function Map({ closeDialog }: MapProps) {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantDetail>()
  const [drawerState, setDrawerState] = useState(false)
  const onSelectRestaurant = useCallback(
    (restaurant: RestaurantDetail) => {
      setRestaurantInfo(restaurant)
      setDrawerState(true)
    },
    [setRestaurantInfo],
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
      {drawerState && <Drawer detail={restaurantInfo} />}
    </StyledMap>
  )
}

export default Dialog({ ContentComponent: Map })
