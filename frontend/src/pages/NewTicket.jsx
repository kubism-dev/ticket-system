import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTicket, reset } from '../features/tickets/ticketSlice';

import Spinner from '../components/Spinner';

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
    const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.ticket
    );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [product, setProduct] = useState('iPhone');
  const [description, setDescription] = useState('');

    useEffect(() => {
        dispatch(reset());
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
        navigate('/tickets');
        dispatch(reset());
    }
  }, [dispatch, isError, isSuccess]);

  const onSubmit = (e) => {
    e.preventDefault();
      dispatch(createTicket({ product, description }));
  };

  return (
    <>
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Fill out the form</p>
      </section>
      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer name</label>
          <input
            type="text"
            value={name}
            id="name"
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Customer E-Mail</label>
          <input
            type="email"
            value={email}
            id="email"
            className="form-control"
            disabled
          />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select
              name="product"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="iPhone">iPhone</option>
              <option value="iPad">iPad</option>
              <option value="MacBook">MacBook</option>
              <option value="iMac">iMac</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Issue</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
