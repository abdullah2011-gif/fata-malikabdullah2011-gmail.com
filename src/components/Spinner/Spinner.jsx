import { CircularProgress } from "@mui/material";

const Spinner = ({ size = 40 }) => {
  return (
    <div className="my-4 flex justify-center">
      <CircularProgress size={size} />
    </div>
  );
};

export default Spinner;
