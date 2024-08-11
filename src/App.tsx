import { useState } from "react";
import { Card } from "./components/Card";
import { Cart } from "./components/Cart";
import { data as myData } from "./db";

function App() {
  const [data, setData] = useState(myData);

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
        <Cart data={data} removeItem={resetQuantityByName} />
      </aside>
    </div>
  );
}

export default App;
