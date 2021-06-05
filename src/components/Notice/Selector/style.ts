import styled from 'styled-components'

import '@src/assets/style/__pallette.css'

const Selector = styled.ul`
  display: flex;
  overflow-x: auto;
  padding: 0.5em;
  background-color: white;

  & > li {
    font-size: 0.85rem;
    flex-shrink: 0;
    margin: 0.3em;
    border-radius: 1em;
    padding: 0.8em 0.7em;
    background-color: var(--notice-gray-100);
    box-shadow: var(--menu-box-shadow);
    color: var(--notice-gray-700);
    cursor: pointer;
  }
`

export default Selector
