import { RiRestTimeLine } from 'react-icons/ri'
import { BiTimeFive } from 'react-icons/bi'
import { RestaurantDetail } from '@components/Restaurant'
import RestaurantDetailDialog from '../Detail'

import StyledShop from './style'

interface ShopProps {
  restaurant: RestaurantDetail
}

function Shop({ restaurant }: ShopProps) {
  let openDialog: Function

  const restaurantOpenCallback = (cb: Function) => {
    openDialog = cb
  }

  return (
    <StyledShop onClick={() => openDialog()}>
      <picture>
        <img
          src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180130_263%2F1517301583613dwuaL_JPEG%2FZh5SeEjUT12rWxcLJ2nstPaB.jpg"
          alt="상점"
        />
      </picture>
      <div className="shop-info">
        <div className="title">{restaurant.name}</div>
        <div className="menu">{`${restaurant.details[0].menu} ${restaurant.details[0].price} ${restaurant.details[1].menu} ${restaurant.details[1].price}`}</div>
        <div className="time">
          <BiTimeFive className="icon" />
          {restaurant.time}
        </div>
        <div className="break">
          <RiRestTimeLine className="icon" />
          {restaurant.break}
        </div>
      </div>
      <RestaurantDetailDialog {...{ restaurant }} openCallback={restaurantOpenCallback} />
    </StyledShop>
  )
}

export default Shop
