import React from 'react'
import NotificationType from '../constants/NotificationType'

interface INotification {
  id: string
  type: NotificationType
  message: string
  icon: React.ReactElement
}

export default INotification
