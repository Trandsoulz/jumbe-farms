import toast from "react-hot-toast";

export const SuccessToast = (ToastMessage: string) => {
  toast.success(`${ToastMessage}`, {
    duration: 5000,
    style: {
      border: "1px solid #52A063",
      padding: "16px",
      color: "#52A063",
    },
    iconTheme: {
      primary: "#52A063",
      secondary: "#FFFAEE",
    },
  });
};

export const ErrorToast = (ToastMessage: string) => {
  toast.error(`${ToastMessage}`, {
    duration: 2000,
    style: {
      border: "1px solid #ff5555",
      padding: "16px",
      color: "#ff5555",
    },
    iconTheme: {
      primary: "#ff5555",
      secondary: "#FFFAEE",
    },
  });
};
