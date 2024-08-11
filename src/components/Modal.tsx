interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end lg:items-center justify-center z-50">
      <div className="bg-white p-6 rounded-t-lg lg:rounded-lg shadow-lg h-[90%] w-full lg:w-1/3">
       
        {children}
      </div>
    </div>
  );
};

export default Modal;
