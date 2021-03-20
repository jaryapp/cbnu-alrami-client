import React, { useState, useEffect, useCallback } from 'react'
import { BiChevronLeft } from 'react-icons/bi'

import StyledDialog from './style'

interface DialogProps {
  title?: string
  ContentComponent: React.FC<{ closeDialog: Function }>
}

function Dialog({ title, ContentComponent }: DialogProps) {
  const EnhancedComponent = ({ openCallback }: { openCallback: Function }) => {
    const [open, setOpen] = useState(false)

    const closeDialog = useCallback(() => {
      setOpen(false)
    }, [setOpen])

    const openDialog = useCallback(() => {
      setOpen(true)
    }, [setOpen])

    useEffect(() => {
      openCallback(openDialog)
    }, [openCallback, openDialog])

    if (!open) return <></>
    return (
      <StyledDialog>
        {title && (
          <div className="header">
            <BiChevronLeft className="arrow" onClick={closeDialog} />
            <div className="title">{title}</div>
          </div>
        )}
        <ContentComponent {...{ closeDialog }} />
      </StyledDialog>
    )
  }

  return EnhancedComponent
}

export default Dialog
