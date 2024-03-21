import React, { useEffect, useState } from "react";
import { Modal, Alert, Spinner } from "react-bootstrap";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";

//store
import { createPayment } from "../../Redux/Action/AuthenticationAction";

const stripePromise = loadStripe(
  "pk_test_51NoqYKSFmyRsFbgfvG3DeKKlziQkHMxOyKfHFyLJRkRMI9oqLhj9sNB1sduIgpf5SwKkDCbNLxnrMYY5lHrS0TCL00fz7iP2uS"
);

const AddNewPaymentMethod = (props) => {
  const { show, toggle } = props;

  const [loading, setloading] = useState(false);

  return (
    <Modal
      id="adddeliveruadd"
      size="md"
      show={show}
      autoFocus={true}
      centered={true}
      onHide={() => toggle()}
      wrapClassName="myaddreess-modal"
      contentClassName=""
      fade
    >
      <div
        className="containerModal"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 9999999,
        }}
      >
        <div className="modal-header">
          <div>
            <h4 className="pop-up-title" id="staticBackdropLabel">
              Invest Amount
            </h4>
            <p className="pop-subcontent">
              WE ACCEPT <strong>(Master Card / Visa Card / Rupay)</strong>
            </p>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => toggle()}
          ></button>
        </div>

        <div className="modal-body spinner-content position-relative">
          <div className="payment-method3">
            <div className="payment-col">
              <Elements stripe={stripePromise}>
                <Content setloading={setloading} loading={loading} {...props} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const Content = (props) => {
  const { error: _error } = props;
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const [error, seterror] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (_error) {
      seterror(_error);
    }
  }, [_error]);

  const changeY = (event) => {
    if (event.error) {
      seterror(event.error.message);
    } else {
      seterror("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount) {
      return toast.error("Amount required!");
    }
    props.setloading(true);

    const cardNumber = elements.getElement(CardNumberElement);

    let result;
    try {
      result = await stripe.createToken(cardNumber);
    } catch (err) {
      props.setloading(false);
      console.log("erro ", err);
      return;
    }

    if (!result || result?.error) {
      props.setloading(false);
      seterror(result?.error?.message);
      return;
    }

    const data = {
      amount: amount,
      token: result?.token?.id,
    };

    console.log(data, "<===data");

    const callBack = (success, response) => {
      props.setloading(false);

      if (success) {
        try {
          // toast.success(response.message);
          toast.success("Invested successfully.");
          //   dispatch(getPaymentCardList({ user_id: user?._id }));
          props.toggle();
        } catch (error) {
          console.log(error, "=========error");
        }
      } else {
        toast.error(response.message);
      }
    };
    dispatch(createPayment(data, callBack));
  };

  return (
    <React.Fragment>
      {error && typeof error === "string" ? (
        <Alert variant="danger">{error}</Alert>
      ) : null}
      {props.profileError && typeof props.profileError === "string" ? (
        <Alert variant="danger">{props.profileError}</Alert>
      ) : null}
      <label>Enter Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: "100%" }}
      />

      <label htmlFor="cardnumber">Card Number</label>
      <CardNumberElement
        id="card-number"
        onChange={changeY}
        className="form-control"
        options={{ placeholder: "Card Number" }}
      />

      <div className="clearfix">
        <div className="payment-method-input">
          <label htmlFor="datecol">Valid through(MM/YY)</label>
          <CardExpiryElement
            id="card-expire"
            onChange={changeY}
            className="form-control"
          />
        </div>

        <div className="payment-method-cvv">
          <label htmlFor="cvv">CVV</label>
          <CardCvcElement
            id="card-cvc"
            onChange={changeY}
            className="form-control"
            options={{ placeholder: "Enter CVV number" }}
          />
        </div>
      </div>

      <div className="btn-check-out w-100 text-center">
        <button onClick={handleSubmit} className="Invest-btn">
          Invest
        </button>
      </div>
    </React.Fragment>
  );
};

export default AddNewPaymentMethod;
