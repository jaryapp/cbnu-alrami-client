import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Name = styled.div`
  border-radius: 0.7rem;
  padding: 10px;
  background-color: var(--menu-gray);
  box-shadow: var(--menu-box-shadow);
  font-size: 0.9rem;
  cursor: pointer;
  min-width: 20%;
  display: flex;
  justify-content: center;
  margin-right: 1rem;
  margin-bottom: 1.3rem;
  height: 1rem;

  &.active {
    color: var(--name-red);
  }
`
export default Name
