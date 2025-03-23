import { useEffect } from 'react';
import marked from '../../assets/mark_Green.png';
import cancel from '../../assets/cancel.png';

type ShowModalProps = {
  setToastModal: React.Dispatch<React.SetStateAction<boolean>>;
  serverResponse: string | null;
};

const ShowModal = ({ setToastModal, serverResponse }: ShowModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Clean up
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const getServerMessage = () => {
    switch (serverResponse) {
      case 'approved':
        return 'Payment Successful';
      case 'username':
        return 'Congratulations!';
      default:
        return 'Error Occurred';
    }
  };

  const getServerSubMessage = () => {
    switch (serverResponse) {
      case 'approved':
        return 'Transaction Approved';
      case 'username':
        return 'Your username has been credited successfully';
      default:
        return serverResponse;
    }
  };

  return (
    <div className="modal-container absolute z-10 w-full h-screen border top-0 left-0 flex flex-col justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="modal-box bg-white w-full max-w-[400px] flex flex-col justify-center gap-2 items-center">
        {serverResponse === 'approved' || serverResponse === 'username' ? (
          <div className="icon w-[150px] h-[150px] mb-4">
            <img src={marked} alt="checked or mark image" />
          </div>
        ) : (
          <div className="icon w-[100px] h-[100px] mb-4">
            <img src={cancel} alt="error image" />
          </div>
        )}

        <p className="modal-message text-xl font-extrabold">
          {getServerMessage()}
        </p>
        <p className="modal-sub-message font-medium text-center">
          {getServerSubMessage()}
        </p>

        <button
          type="submit"
          className="uppercase bg-[#0d60d8] hover:bg-1[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none mt-3"
          onClick={() => {
            setToastModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShowModal;
