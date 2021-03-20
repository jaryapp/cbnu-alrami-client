import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Dialog = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: white;
  z-index: 1;
  .header {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid gray;
    position: sticky;
    top: 0px;
    background: #fff;
    width: 100%;
    text-align: center;

    .title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 0.3rem;
    }

    .arrow {
      position: absolute;
      font-size: 2rem;
      left: 2px;
      top: 15px;
    }
  }
`
export default Dialog
