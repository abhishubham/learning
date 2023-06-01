type TemplatePreviewProps = {
  onDone: any;
  onClose: VoidFunction;
};

export default function CreateProModal({
  onClose,
  onDone,
}: TemplatePreviewProps) {
  return (
    <div className={`sm:w-2/4 w-3/4 sm:mx-auto bg-white p-4 border-0 rounded-lg shadow-lg`}>
      <div className="px-6 py-4 flex flex-col gap-y-2  rounded-t-md">
        <h2 className="font-bold text-3xl text-blue-800 text-ellipsis">
        Confirm your Product Creation
        </h2>
      </div>
      <hr className="border-gray-200 dark:border-gray-700 w-full ml-0 p-0"></hr>
      <div className="px-6 flex flex-col gap-y-2  rounded-t-md">
          <h3>Click the confirm Button to successfully create your Product</h3>
        </div>
      <div className="flex flex-col sm:flex-row sm:justify-between justify-center mt-6 sm:px-6">
        <button
          type="button"
          onClick={onClose}
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-12 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-2 sm:mb-0"
        >
          Cancle
        </button>
        <button
             className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-12 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          onClick={onDone}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
