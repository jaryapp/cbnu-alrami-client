import StyledDrawer from './style'
import { RestaurantDetail } from '@components/Restaurant'

function Drawer({ restaurant }: { restaurant: RestaurantDetail }) {
  return (
    <StyledDrawer>
      <div className="photo" />
      <div className="info">
        <div className="name">{restaurant.name}</div>
        <div className="address">{restaurant.address}</div>
        <div className="menu">
          {restaurant.details[0].menu} {restaurant.details[0].price}
        </div>
      </div>
    </StyledDrawer>
  )
}

export default Drawer
