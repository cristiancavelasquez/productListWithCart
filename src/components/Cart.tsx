import { dataInterface } from "../interfaces/product.interface";

export const Cart = ({ data, removeItem, setOpen }: dataInterface) => {
  const totalItems = data.reduce((acc, item) => acc + item.quantity, 0);
  const totalSale = data.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  return (
    <div className="bg-rose-50 rounded-lg min-h-52 p-5 flex flex-col gap-4">
      <h2 className="text-red-custom text-xl font-bold text-">
        Your Cart ({totalItems})
      </h2>

      {totalItems === 0 ? (
        <div className=" flex-auto flex flex-col justify-center items-center gap-2">
          <img
            src="public\assets\images\illustration-empty-cart.svg"
            alt="empty-card"
          />
          <p className="text-xs text-rose-500 font-semibold">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <section className="flex flex-col gap-4">
          {data.map(
            (item) =>
              item.quantity > 0 && (
                <section key={item.name} className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 font-semibold flex-col text-xs">
                      <p className=" text-rose-900">{item.name}</p>
                      <div className="flex gap-3 items-center">
                        <p className="text-red-custom">{`${item.quantity}x`}</p>
                        <p className="font-normal text-rose-400">{`@ $${item.price}`}</p>
                        <p className="text-rose-500">{`$${
                          item.quantity * item.price
                        }`}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.name)}
                      className="rounded-full border-2 p-1 border-rose-400"
                    >
                      <img
                        src="public/assets/images/icon-remove-item.svg"
                        alt=""
                      />
                    </button>
                  </div>
                  <hr />
                </section>
              )
          )}
          <div className="flex items-center mt-2 justify-between">
            <p className="text-xs">Order Total</p>
            <p className="font-bold text-rose-900">{`$${totalSale}`}</p>
          </div>
          <div className="text-[14px] gap-2 text-rose-900 flex bg-rose-100 items-center justify-center px-3 py-3 rounded-md">
            <img src="public/assets/images/icon-carbon-neutral.svg" alt="" />
            <p>
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="text-xs bg-red-custom py-3 rounded-full text-rose-50 font-semibold"
          >
            Confirm Order
          </button>
        </section>
      )}
    </div>
  );
};
