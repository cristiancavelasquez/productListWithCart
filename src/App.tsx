import { useState } from "react";
import { Card } from "./components/Card";
import { Cart } from "./components/Cart";
import { data as myData } from "./db";
import Modal from "./components/Modal";

function App() {
  const [data, setData] = useState(myData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const incrementQuantity = (name: string) => {
    const newData = data.map((item) => {
      if (item.name === name) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setData(newData);
  };

  const decrementQuantity = (name: string) => {
    const newData = data.map((item) => {
      if (item.name === name && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setData(newData);
  };

  const resetQuantityByName = (name: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.name === name ? { ...item, quantity: 0 } : item
      )
    );
  };

  const startNewOrder = () => {
    setData(myData);
    setIsModalOpen(false);
  };

  return (
    <div className="flex lg:flex-row flex-col bg-rose-100 gap-4 lg:py-10 py-6 px-5 lg:px-16">
      <main className="flex flex-col lg:w-3/4 gap-5">
        <h1 className="text-3xl font-bold text-rose-900">Desserts</h1>
        <section className="grid grid-cols-1 gap-7 lg:grid-cols-3 lg:p-2 md:grid-cols-2">
          {data.map((item) => (
            <Card
              key={item.name}
              {...item}
              onIncrement={() => incrementQuantity(item.name)}
              onDecrement={() => decrementQuantity(item.name)}
            />
          ))}
        </section>
      </main>
      <aside className="lg:w-1/4">
        <Cart
          data={data}
          removeItem={resetQuantityByName}
          setOpen={setIsModalOpen}
        />
      </aside>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="w-full h-full flex flex-col gap-4">
          <img
            className="max-h-10 self-start"
            src="./assets/images/icon-order-confirmed.svg"
            alt="check"
          />
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">Order Confirmed</h2>
            <p className="text-gray-700">We hope you enjoy your food!</p>
          </div>
          <div className="bg-rose-100 rounded-md p-5 overflow-scroll lg:overflow-auto">
            {data.map(
              (item) =>
                item.quantity > 0 && (
                  <section key={item.name} className="flex flex-col gap-3 mt-1">
                    <div className="flex justify-start items-center">
                      <img
                        className="max-h-9 rounded-md"
                        src={item.image.thumbnail}
                        alt="tumb"
                      />
                      <div className="flex items-center pl-2 justify-between flex-auto">
                        <div className="flex gap-1 font-semibold  flex-col text-xs">
                          <p className=" text-rose-900">{item.name}</p>
                          <div className="flex gap-3 items-center">
                            <p className="text-red-custom">{`${item.quantity}x`}</p>
                            <p className="font-normal text-rose-400">{`@ $${item.price}`}</p>
                          </div>
                        </div>
                        <p className="text-xs font-semibold text-rose-900">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                    <hr />
                  </section>
                )
            )}
            <div className="flex mt-3 items-center justify-between">
              <p className="text-xs">Order Total</p>
              <p className="font-bold">
                $
                {data.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}
              </p>
            </div>
          </div>
          <button
            onClick={startNewOrder}
            className="px-4 py-2 bg-red-600 text-white rounded-full"
          >
            Start New Order
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
