import Swal from "sweetalert2";

const useCopyButtons = () => {
  const copyClassList = (toCopy: string) => {
    navigator.clipboard.writeText(toCopy);
    Swal.fire("The copied content is in the clipboard", "", "success");
  };

  return {
    copyClassList,
  };
};

export default useCopyButtons;
