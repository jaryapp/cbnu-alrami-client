import React, { useState, useEffect, useCallback } from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { RestaurantDetail } from '@components/Restaurant'

import StyledDialog from './style'

interface DialogProps {
  title?: string
  ContentComponent: React.FC<{ restaurant?: RestaurantDetail; closeDialog: Function }>
}

interface EnhancedComponentProps {
  restaurant?: RestaurantDetail
  openCallback: Function
}

function Dialog({ title, ContentComponent }: DialogProps) {
  const EnhancedComponent = ({ restaurant, openCallback }: EnhancedComponentProps) => {
    const [open, setOpen] = useState(false)

    const closeDialog = useCallback(
      e => {
        setOpen(false)
        e.stopPropagation()
      },
      [setOpen],
    )

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
            <BiChevronLeft className="arrow" onClick={e => closeDialog(e)} />
            <div className="title">{title}</div>
          </div>
        )}
        <ContentComponent {...{ restaurant, closeDialog }} />
      </StyledDialog>
    )
  }

  return EnhancedComponent
}

export default Dialog
