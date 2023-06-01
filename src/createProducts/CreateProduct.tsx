import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Axios from "../Axios";
import { useMutation } from "react-query";
import SuccessMessage from "./SuccessMessage";
import InputField from "../components/InputField";
// import FileUploadInput from "../components/FileUploadInput";
import CustomAside from "../components/CustomAside";
import useModal from "../components/useModal";
import { PageWrapper } from "../styles/common";

type ProductProps = {
  title: string;
  price: number;
  description: string;
  image: string | null;
  category: string;
  values:string;
  handleChnage: void;
};

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,    
    formState: { errors },
  } = useForm<ProductProps>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { mutate, isLoading, isError } = useMutation(
    (data: ProductProps) =>
      Axios.POST("http://localhost:3002/products", data)
  );
  
 
  
  

  const onSubmit = async (data: ProductProps) => {
    await mutate(data, {
      onSuccess: () => {
        reset();
        setImagePreview("");
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      },
      onError: () => {
        console.log("An error occurred during mutation.");
      }
    });
  };

  const handleReset = () => {
    setImagePreview("");
    reset();
  };

  return (
    <div className="flex  ">
      {isError && <div>An error occurred</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 rounded-lg flex-grow-1 w-2/3 "
        >
          {isSubmitted && (
            <div className="text-white-500 mb-4 bg-green-600 rounded-md">
              <SuccessMessage message="Created successfully" />
            </div>
          )}
          <InputField
            type="text"
            label="title"
            name="titTitle"
            placeholder="Enter Your Product name"
            register={register}
            errors={errors}
          />

          <InputField
            type="number"
            label="Price"
            name="price"
            placeholder="Enter your Product Price"
            register={register}
            errors={errors}
          />

          <div className="mb-4">
            <label className="text-blue-800 block mb-2">Description<AsteriskIcon/></label>
            <Controller
              control={control}
              name="description"
              defaultValue=""
            
              rules={{ required: true }}
              render={({ field }) => (
                <ReactQuill
                  value={field.value}
                  placeholder="Describe about your Product"
                  onChange={field.onChange}
                  className="bg-white border-gray-300 rounded-md p-1 "
                />
              )}
            />
            {errors.description && (
              <span className="text-red-500">Description is required<AsteriskIcon/></span>
            )}
          </div>
      

       
          <div className="mb-4">
            <label className="text-blue-800 block mb-2 ">Category<AsteriskIcon/></label>
            <select
              {...register("category", { required: true })}
              className="border  rounded-md p-1 w-full h-9"
              placeholder="Choose your category according to Your Product"
            >
              <option value="Choose your category according to Your Product"></option>
              <option value="food">Food</option>
              <option value="cloth">Cloth</option>
              <option value="electronics">Electronics</option>
            </select>
            {errors.category && (
              <span className="text-red-500">Category is required</span>
            )}
          </div>
         

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Create
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Reset
          </button>
        </form>
      )}
         <CustomAside
            title={"Preview Your uploaded Picture"}
            children={
              imagePreview && (
                <img src={imagePreview} alt="Preview" className="mt-2 h-50 " />
              )
            }
          />
    </div>
  );
};

const AsteriskIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-2 h-2 inline-block mb-3 text-orange-500"
    stroke="none"
    fill="currentColor"
  >
    <path
      d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z" />
  </svg>
);

export default CreateProduct;
