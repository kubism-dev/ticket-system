import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

function Home() {
  return (
    <>
      <section className="heading">
        <h1>Ask for help</h1>
        <p>Choose from selected topics</p>
      </section>
      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create Ticket
      </Link>
      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> View my Tickets
      </Link>
    </>
  );
}

export default Home;
