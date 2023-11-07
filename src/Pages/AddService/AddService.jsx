import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;

    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const servicePrice = form.servicePrice.value;
    const serviceProviderName = form.serviceProviderName.value;
    const serviceProviderEmail = form.serviceProviderEmail.value;
    const serviceArea = form.serviceArea.value;
    const serviceDescription = form.serviceDescription.value;

    const serviceProviderImage = user?.providerData[0].photoURL || "";

    const newService = {
      serviceName,
      serviceDescription,
      serviceArea,
      serviceProviderName,
      serviceProviderEmail,
      servicePrice,
      serviceImage,
      serviceProviderImage,
    };
    console.log(newService);

    // send data to the server
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Service Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="bg-gray-200 p-20">
      <Helmet>
        <title>Travel Tandem | Add Service</title>
      </Helmet>
      <h2 className="text-4xl font-extrabold text-center mb-4">
        ADD NEW <span className="text-pink-500">SERVICE</span>
      </h2>
      <form onSubmit={handleAddService}>
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
                name="serviceProviderName"
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
                name="serviceProviderEmail"
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
          value="Add Service"
          className="btn btn-block btn-neutral"
        />
      </form>
    </div>
  );
};

export default AddService;
