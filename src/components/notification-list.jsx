import React, { useState } from 'react'
import notificationsData from '../notifications'
import NotificationTile from './notification-tile'

export default function NotificationList() {
    const [notifications, setNotifications] = useState(notificationsData)

    return (
        <section className="notification-list">
            <div className="row heading">
                <h2>Notifications <span className="notification-count">{notifications.length}</span></h2>
                <button onClick={() => setNotifications([])} className="clear-all-button">
                    clear all
                </button>
            </div>
            <div className="col">
                {notifications.length === 0 ? <div className='no-notifications'>
                <h3>No notifications</h3>
                </div> : notifications.map((notification, i) => (
                    <NotificationTile key={i} {...notification} onClear={(id)=>{
                        setNotifications(notifications.filter(notification => notification.id !== id))
                    }} />
                ))}
            </div>
        </section>
    )
}
