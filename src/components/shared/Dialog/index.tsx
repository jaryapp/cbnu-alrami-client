import React from 'react'
import { Link } from 'react-router-dom'
import { BiChevronLeft } from 'react-icons/bi'

import StyledDialog from './style'

interface DialogProps {
  title: string
  ContentComponent: React.FC
}

function Dialog({ title, ContentComponent }: DialogProps) {
  function EnhancedComponent() {
    return (
      <StyledDialog>
        <div className="header">
          <BiChevronLeft className="arrow" />
          <div className="title">{title}</div>
        </div>
        <ContentComponent />
      </StyledDialog>
    )
  }

  return EnhancedComponent
}

export default Dialog
