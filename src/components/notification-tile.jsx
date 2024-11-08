
export default function NotificationTile({ id, name, message, onClear }) {

    return (
        <div className="notification-tile">
            <div className="row">
                <h3>{name}</h3>
                <button onClick={() => onClear(id)} className="clear-button">
                    clear
                </button>
            </div>
            <p>{message}</p>
        </div>
    );
}
