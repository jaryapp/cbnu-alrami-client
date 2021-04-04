import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

export const FloatingWrapper = styled.div`
  position: fixed;
  display: flex;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: var(--button-red);
  color: white;
  box-shadow: 1px 0 4px 1px rgb(0 0 0 / 10%);
  bottom: 4.5rem;
  right: 1.2rem;
  font-size: 1.7rem;
  cursor: pointer;
`
