import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const image_hosting_token = import.meta.env.VITE_image_Token;
const AddAClass = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  console.log(image_hosting_token);
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgResponse => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price,instructorName,instructorEmail,availableSets } = data;
          const newClass = {
            name,
            price: parseFloat(price),
            image: imgURL,
            instructor_name: instructorName,
            instructor_email: instructorEmail,
            available_seats:availableSets
          };
          console.log(newClass)
          fetch("http://localhost:5000/all-class", {
            method: "POST",
            headers: {
              'content-type' : 'application/json'
            },
            body:JSON.stringify(newClass)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("class add Successfully");
              }
            });
        }
        })
 
  };

  return (
    <div className="container mx-auto mb-10 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full border shadow-md p-10 rounded-lg">
          <h1 className="text-4xl my-4 text-orange-500 font-bold underline text-center">
            Add A Class
          </h1>
          <div className=" md:grid sm:grid-cols-1 md:grid-cols-2   gap-4 ">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-lg">Class Image URL</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Class Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name")}
                className="input  input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Instructor Name</span>
              </label>
              <input
                type="text"
                name="instructorName"
                {...register("instructorName")}
                readOnly
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Instructor Email</span>
              </label>
              <input
                type="email"
                name="instructorEmail"
                {...register("instructorEmail")}
                readOnly
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Available Sets</span>
              </label>
              <input
                type="text"
                name="availableSets"
                {...register("availableSets")}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Price</span>
              </label>
              <input
                type="text"
                name="price"
                {...register("price")}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <input
              type="submit"
              className=" py-2  hover:bg-orange-600 bg-orange-500"
              value="Add Class"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAClass;
