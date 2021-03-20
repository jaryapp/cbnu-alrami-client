import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Map = styled.div`
  .back {
    position: fixed;
    background: white;
    border-radius: 50%;
    border: 1px solid lightgray;
    width: 2rem;
    height: 2rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    z-index: 1;

    .icon-back {
      position: relative;
      width: 1.2rem;
      margin-left: 0.3rem;
      top: -0.5rem;
    }
  }

  .drawer {
    position: fixed;
    bottom: 0;
    height: 10rem;
    width: 100%;
    z-index: 1000;
    background: #fff;
  }
`
export default Map
