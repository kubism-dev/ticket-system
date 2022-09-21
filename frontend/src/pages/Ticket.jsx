import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTicket, closeTicket, reset } from '../features/tickets/ticketSlice';
import { toast } from 'react-toastify'

import Spinner from '../components/Spinner';

function Ticket() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { ticket, isLoading, isSuccess, isError } = useSelector(
    (state) => state.ticket
  );
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTicket(params.ticketId));
  }, [dispatch]);

  if (isLoading) {
    <Spinner />;
  }
  const onTicketClose = () => {
    dispatch(closeTicket(params.ticketId))
    toast.success('Ticket Closed')
    navigate('/tickets')
  }
  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <h2>
          Ticket ID: {ticket._id}{' '}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString('de-DE')}
        </h3>
        <h3>{ticket.product}</h3>
        <hr />
        <div className="ticket-desc">{ticket.description}</div>
      </header>
      {ticket.status !== 'closed' && <button className="btn btn-block btn-danger" onClick={onTicketClose}>Close Ticket</button>}
    </div>
  );
}

export default Ticket;
