import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddService = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const photo = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const servicePrice = form.servicePrice.value;

    const name = form.name.value;
    const email = form.email.value;

    const serviceArea = form.serviceArea.value;
    const serviceDescription = form.serviceDescription.value;

    const newProduct = {
      serviceName,
      serviceDescription,
      serviceArea,
      name,
      email,
      servicePrice,
      photo,
    };
    console.log(newProduct);

  };

  return (
    <div className="bg-gray-200 p-20">
      <h2 className="text-3xl font-extrabold text-center mb-4">
        Add a Product
      </h2>
      <form onSubmit={handleAddProduct}>
        <div className="mb-6 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL of Service</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="serviceImage"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-6 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Service name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="serviceName"
                placeholder="Service name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="servicePrice"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-6 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
                defaultValue={user?.displayName || ""}
                readOnly
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                defaultValue={user?.email || ""}
                readOnly
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-6 gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Service Area</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="serviceArea"
                placeholder="Service Area"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="serviceDescription"
                placeholder="Short description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-block btn-neutral"
        />
      </form>
    </div>
  );
};

export default AddService;
