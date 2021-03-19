import StyledShop from './style'

interface Menu {
  menu: string
  price: number
}
interface RestaurantDetail {
  address?: string
  location: string
  longitude?: number
  latitude?: number
  name: string
  details?: Menu[]
  time: string
  break: string
}

function Shop({ restaurant }: { restaurant: RestaurantDetail }) {
  return (
    <StyledShop>
      <img
        src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180130_263%2F1517301583613dwuaL_JPEG%2FZh5SeEjUT12rWxcLJ2nstPaB.jpg"
        alt={restaurant.name}
      />
      <div className="shop-info">
        <div className="title">{restaurant.name}</div>
        <div className="menu">
          {restaurant.details?.map(detail => (
            <>{`${detail.menu} ${detail.price} `}</>
          ))}
        </div>
        <div className="time">
          {restaurant.time} | 브레이크 타임 {restaurant.break}
        </div>
      </div>
    </StyledShop>
  )
}

export default Shop
