import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Dialog = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid gray;
    position: sticky;
    top: 0px;
    background: #fff;
    z-index: 1;
    .title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 0.3rem;
    }

    .arrow,
    .close {
      font-size: 2rem;
    }

    .arrow {
      margin-left: 1rem;
    }

    .close {
      margin-right: 1rem;
    }
  }
`
export default Dialog
