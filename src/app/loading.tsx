import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClipLoader color="#000" size={50} />
    </div>
  );
}