import { IoSettingsOutline } from "react-icons/io5";

const Error = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-12 mb-12">
      <h1 className="text-4xl font-bold text-red-500">¡Error! (404) </h1>
      <p className="text-lg text-center mt-4">
        Ha ocurrido un error. Por favor, intenta nuevamente más tarde.
      </p>

      <div className="grid grid-cols-3 grid-rows-2 animate-pulse">
        <div className="col-start-2">
          <IoSettingsOutline className="text-[250px] text-gray-900 relative animate-spin" />
        </div>
        <div className="row-start-2">
          <IoSettingsOutline className="text-[250px] text-gray-900 relative animate-spin" />
        </div>
        <div className="col-start-3 row-start-2">
          <IoSettingsOutline className="text-[250px] text-gray-900 relative animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default Error;
