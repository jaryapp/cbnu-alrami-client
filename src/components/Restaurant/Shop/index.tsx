import StyledShop from './style'

function Shop() {
  return (
    <StyledShop>
      <img
        src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180130_263%2F1517301583613dwuaL_JPEG%2FZh5SeEjUT12rWxcLJ2nstPaB.jpg"
        alt="밀방"
      />
      <div className="shop-info">
        <div className="title">밀방</div>
        <div className="menu">얼큰칼국수 6,000원</div>
        <div className="time">오전 11시 ~ 오후 8시 | 브레이크 타임 없음</div>
      </div>
    </StyledShop>
  )
}

export default Shop
