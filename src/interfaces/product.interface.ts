export interface productInterface {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  quantity: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export interface dataInterface {
  data: productInterface[];
  removeItem: (name: string) => void;
}
