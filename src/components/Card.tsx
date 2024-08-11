import { productInterface } from "../interfaces/product.interface";

export const Card = ({
  category,
  image,
  name,
  price,
  quantity,
  onIncrement,
  onDecrement,
}: productInterface) => {
  return (
    <section className=" min-h-16 flex flex-col gap-7">
      <div className="flex flex-col relative">
        <img
          className="rounded-lg w-full h-auto"
          src={image.desktop}
          alt="pic"
        />
        {quantity <= 0 ? (
          <button
            onClick={onIncrement}
            className="flex items-center justify-center absolute bottom-0 self-center translate-y-1/2 bg-rose-50 w-4/6 border border-rose-500 gap-2 rounded-full px-3 py-2 text-sm font-semibold text-rose-900"
          >
            <img src="public\assets\images\icon-add-to-cart.svg" alt="add" />
            <p className="text-sm">Add to Cart</p>
          </button>
        ) : (
          <div className="flex w-4/6 items-center justify-between absolute bottom-0 self-center translate-y-1/2 bg-red-custom text-rose-100 border gap-2 rounded-full px-3 py-2 text-sm font-semibold">
            <button
              onClick={onDecrement}
              className="border border-rose-100 rounded-full h-4 w-4 flex items-center justify-center"
            >
              <img
                src="public\assets\images\icon-decrement-quantity.svg"
                alt="add"
              />
            </button>
            <p className="text-sm">{quantity}</p>
            <button
              onClick={onIncrement}
              className="border border-rose-100 rounded-full h-4 w-4 flex items-center justify-center"
            >
              <img
                src="public\assets\images\icon-increment-quantity.svg"
                alt="add"
              />
            </button>
          </div>
        )}
      </div>
      <div>
        <p className="text-sm text-rose-500">{category}</p>
        <p className="font-semibold text-rose-900">{name}</p>
        <p className="font-semibold text-red-custom">{`$${price}`}</p>
      </div>
    </section>
  );
};
