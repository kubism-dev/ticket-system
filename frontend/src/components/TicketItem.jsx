import { Link } from 'react-router-dom'

function Ticket({ ticket }) {
    return (
        <div className="ticket">
            <div>{new Date(ticket.createdAt).toLocaleString('de-DE')}</div>
            <div>{ticket.product}</div>
            <div className={`status status-${ticket.status}`}>
                {ticket.status}
            </div>
            <Link to={`/ticket/${ticket._id}`} className="btn btn-reverse">Link</Link>
      </div>
  )
}

export default Ticket