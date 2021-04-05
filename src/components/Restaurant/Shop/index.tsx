import StyledShop from './style'
import { RiRestTimeLine } from 'react-icons/ri'
import { BiTimeFive } from 'react-icons/bi'
import { RestaurantDetail } from '@components/Restaurant'

interface ShopProps {
  restaurant: RestaurantDetail
}

function Shop({ restaurant }: ShopProps) {
  return (
    <StyledShop>
      <div className="img" />
      <div className="shop-info">
        <div className="title">{restaurant.name}</div>
        <div className="menu">
          {restaurant.details.map(detail => (
            <>{`${detail.menu} ${detail.price} `}</>
          ))}
        </div>
        <div className="time">
          <BiTimeFive className="icon" />
          {restaurant.time}
        </div>
        <div className="break">
          <RiRestTimeLine className="icon" />
          {restaurant.break}
        </div>
      </div>
    </StyledShop>
  )
}

export default Shop
