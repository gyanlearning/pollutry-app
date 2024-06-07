import { useToast } from "react-native-toast-notifications";

export const useMessage = () => {
  const toast = useToast();

  const showMessage = (message, type) => {
    if (toast) { // Check if toast is defined before calling show
      toast.show(message, {
        type: type,
        placement: "top",
        duration: 4000,
        animationType: "zoom-in",
      });
    } else {
      console.error("Toast is not initialized.");
    }
  };

  return { showMessage }; 
};
