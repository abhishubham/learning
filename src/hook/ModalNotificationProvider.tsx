import { createContext, useContext, useState } from "react";

type ModalNotificationContextType = {
  content?: JSX.Element | string;
  setContent: (content?: JSX.Element | string) => void;
};

const initialState: ModalNotificationContextType = {
  content: undefined,
  setContent: (content?: JSX.Element | string) => {},
};
const ModalNotificationContext = createContext(initialState);

export function useModalNotification() {
  const notificationContext = useContext(ModalNotificationContext);
  return notificationContext;
}

export function ModalNotificationProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [content, setContent] = useState<JSX.Element | string | undefined>();

  return (
    <ModalNotificationContext.Provider
      value={{
        content,
        setContent,
      }}
    >
      {content}
      {children}
    </ModalNotificationContext.Provider>
  );
}

export default ModalNotificationProvider;
