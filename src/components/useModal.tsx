import { useOnClickOutside } from "../hook/useOnClickOutside";
import { useModalNotification } from "../hook/ModalNotificationProvider";

export default function useModal() {
  const { setContent } = useModalNotification();
  const ref = useOnClickOutside(() => setContent());

  

  const Modal = ({ children }: { children: JSX.Element | string }) => {
    return (
      <div className="zz-modal bg-disabled-500 w-full h-full flex justify-center items-center z-50 fixed">
        <div
          className="flex justify-center items-center w-full h-full"
          ref={ref}
        >
          {children}
        </div>
      </div>
    );
  };

  return {
    openModel: (content: JSX.Element | string) =>
      setContent(<Modal>{content}</Modal>),
    closeModel: () => setContent(),
  };
}
