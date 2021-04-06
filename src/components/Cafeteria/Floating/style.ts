import styled from 'styled-components'

import '@src/assets/style/__pallette.css'

const Floating = styled.div`
  position: fixed;
  bottom: 1.2rem;
  right: 1.2rem;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #222;
  color: #fff;
  font-weight: 600;
  display: flex column;
  box-shadow: var(--floating-box-shadow);
  cursor: pointer;
  
  p {
    font-size: 0.8rem;
    margin-top: 0.3rem;
    text-align: center;
  }

  p:first-child {
    padding-top: 0.4rem;
  }
`
export default Floating
