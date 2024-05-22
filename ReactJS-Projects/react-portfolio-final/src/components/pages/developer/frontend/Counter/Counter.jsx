import React from "react";
import CountUp from "react-countup";
import useQueryData from "../../../../custom-hook/useQueryData";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Counter = () => {
  const { isLoading: isLoadingCounter, data: counter } = useQueryData(
    "/v1/counter", // endpointO
    "get", // method
    "counterKey" // key
  );

  return (
    <>
      <section
        data-aos-duration="2000"
        data-aos="fade-up"
        className="container my-32"
      >
        <div className="counter grid grid-cols-3 phone:grid-cols-1 tablet:grid-cols-3">
          {counter?.data.map(
            (item, key) =>
              item.counter_is_active === 1 && (
                <div className="counter-item" key={key}>
                  <h2
                    id="counter"
                    className="text-[50px] text-center mb-2 text-cGreen font-bold"
                  >
                    <CountUp
                      className="text-center"
                      end={item.counter_number}
                      duration={5}
                    />
                    +
                  </h2>
                  <h3 className="text-center">{item.counter_title}</h3>
                </div>
              )
          )}
        </div>
      </section>
    </>
  );
};

export default Counter;
