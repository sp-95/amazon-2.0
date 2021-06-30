import { selectNotifications } from '@/slices/notificationsSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import Notification from './Notification'

function NotificationProvider(): React.ReactElement {
  const notifications = useSelector(selectNotifications)

  return (
    <div className="notification-wrapper">
      {notifications.map(({ id, type, message }) => {
        return <Notification key={id} id={id} type={type} message={message} />
      })}
    </div>
  )
}

export default NotificationProvider
