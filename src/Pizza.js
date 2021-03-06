import React from "react";
import { connect } from "react-redux";
import { setPizza, setPeople, setPlates } from "./actions";

const mapStatetoProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    setPeople(value) {
      dispatch(setPeople(value));
    },
    setPizza(value) {
      dispatch(setPizza(value));
    },
    setPlates() {
      dispatch(setPlates());
    },
  };
};

const Pizza = (props) => {
  const { people, plates, pizza, setPlates, setPizza, setPeople } = props;
  return (
    <div>
      <div className='page-wrapper bg-red p-t-180 p-b-100 font-robo'>
        <div className='wrapper wrapper--w960'>
          <div className='card card-2'>
            <div className='card-heading'></div>
            <div className='card-body'>
              <div className='title'>
                <h2>Order your pizza</h2>
                <span>( Each Pizza contains 8 slices )</span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPlates();
                }}
              >
                <div className='input-group'>
                  <label for='personas'>
                    Number of people that will eat pizza
                    <input
                      className='input input--style-2'
                      type='number'
                      name='personas'
                      onChange={(event) => {
                        setPeople(event.target.value);
                      }}
                      value={people}
                    />
                  </label>
                </div>
                <div className='input-group'>
                  <label for='pizzas'>
                    Number of slices that each person will eat
                    <input
                      classNamee='input input--style-2'
                      type='number'
                      name='pizza'
                      onChange={(event) => {
                        setPizza(event.target.value);
                      }}
                      value={pizza}
                    />
                  </label>
                </div>
                <div>
                  <button
                    className='button btn btn--radius btn--green'
                    type='submit'
                    onClick={setPlates}
                  >
                    Calculate Pizzas
                  </button>
                </div>
              </form>
              <h4 className={`p-t-30 ${plates ? 'show' : 'hide'}`}>
                The amount of pizzas you need to purchase are: {plates}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStatetoProps, mapDispatchToProps)(Pizza);
