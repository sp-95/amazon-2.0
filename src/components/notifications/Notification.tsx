import type INotification from '@/@types/notification'
import { removeNotification } from '@/slices/notificationsSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function Notification(props: INotification): React.ReactElement {
  const { id, type, message } = props

  const [exit, setExit] = React.useState(false)
  const [width, setWidth] = React.useState(0)
  const [intervalID, setIntervalID] =
    React.useState<ReturnType<typeof setInterval>>()

  const dispatch = useDispatch()

  const handleStartTimer = () => {
    const newIntervalID = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5
        }

        return prev
      })
    }, 20)

    setIntervalID(newIntervalID)
  }

  const handlePauseTimer = () => {
    if (intervalID) clearInterval(intervalID)
  }

  const handleCloseNotification = () => {
    handlePauseTimer()
    setExit(true)

    setTimeout(() => {
      dispatch(removeNotification(id))
    }, 400)
  }

  React.useEffect(() => {
    handleStartTimer()
  }, [])

  React.useEffect(() => {
    if (width === 100) {
      handleCloseNotification()
    }
  }, [width])

  return (
    <div
      className={`notification ${type.toLowerCase()} ${exit && 'exit-right'}`}
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
    >
      <p className="px-5 py-1">{message}</p>
      <div style={{ width: `${width}%` }} className="notification-bar" />
    </div>
  )
}

export default Notification
