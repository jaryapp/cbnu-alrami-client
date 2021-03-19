import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { IoIosClose } from 'react-icons/io'
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
          <p className="title">{title}</p>
          <IoIosClose className="close" />
        </div>
        <ContentComponent />
      </StyledDialog>
    )
  }

  return EnhancedComponent
}

export default Dialog
