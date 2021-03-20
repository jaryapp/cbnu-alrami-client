import { useState, useCallback } from 'react'
import { BiChevronLeft } from 'react-icons/bi'

import StyledDialog from './style'

interface DialogProps {
  title: string
  ContentComponent: React.FC
}

function Dialog({ title, ContentComponent }: DialogProps) {
  const EnhancedComponent = ({ openCallback }: { openCallback: Function }) => {
    const [open, setOpen] = useState(false)
    const closeDialog = useCallback(() => {
      setOpen(false)
    }, [])
    const openDialog = useCallback(() => {
      setOpen(true)
    }, [])
    openCallback(openDialog)

    if (!open) return <></>

    return (
      <StyledDialog>
        <div className="header">
          <BiChevronLeft className="arrow" onClick={closeDialog} />
          <div className="title">{title}</div>
        </div>
        <ContentComponent />
      </StyledDialog>
    )
  }

  return EnhancedComponent
}

export default Dialog
