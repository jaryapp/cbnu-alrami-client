import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Drawer = styled.div`
  position: fixed;
  bottom: 0;
  height: 10rem;
  width: 100%;
  z-index: 1000;
  background: #fff;
  display: flex;

  .photo {
    width: 6rem;
    height: 60%;
    border-radius: 0.2rem;
    margin-left: 1rem;
    margin-top: 1.5rem;
    background-image: url('https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180130_263%2F1517301583613dwuaL_JPEG%2FZh5SeEjUT12rWxcLJ2nstPaB.jpg');
    background-size: cover;
  }

  .info {
    margin-top: 1.5rem;
    margin-left: 1rem;
    .name {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .address {
      margin-top: 1rem;
      font-size: 0.9rem;
      color: gray;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 250px;
    }

    .menu {
      font-size: 0.9rem;
      color: gray;
      margin-top: 0.3rem;
    }
  }
`

export default Drawer
