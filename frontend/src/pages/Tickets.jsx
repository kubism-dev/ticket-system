import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, reset } from '../features/tickets/ticketSlice';

import Spinner from '../components/Spinner';
import TicketItem from '../components/TicketItem';

function Tickets() {
  const dispatch = useDispatch();

  const {
    tickets,
    isLoading,
    isSuccess,
    isError,
  } = useSelector((state) => state.ticket);

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    <Spinner />;
  }
  return (
    <>
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div>Link</div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  );
}

export default Tickets;
