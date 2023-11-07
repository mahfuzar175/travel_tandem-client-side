import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateService = () => {
  const service = useLoaderData();

  const {
    _id,
    serviceName,
    serviceDescription,
    serviceImage,
    servicePrice,
    serviceArea,
  } = service;

  const handleUpdateService = (event) => {
    event.preventDefault();
    const form = event.target;

    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const servicePrice = form.servicePrice.value;
    const serviceArea = form.serviceArea.value;
    const serviceDescription = form.serviceDescription.value;

    const updatedService = {
      serviceName,
      serviceDescription,
      serviceArea,
      servicePrice,
      serviceImage,

    };

    console.log(updatedService);

    fetch(`http://localhost:5000/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Service Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });

  };

  return (
    <div className="bg-gray-200 p-20">
      <h2 className="text-3xl font-extrabold text-center mb-4">
        Update Service
      </h2>
      <form onSubmit={handleUpdateService}>
        <div className="mb-6 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL of Service</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="serviceImage"
                defaultValue={serviceImage}
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
                defaultValue={serviceName}
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
                defaultValue={servicePrice}
                placeholder="Price"
                className="input input-bordered w-full"
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
                defaultValue={serviceArea}
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
                defaultValue={serviceDescription}
                placeholder="Short description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Service"
          className="btn btn-block btn-neutral"
        />
      </form>
    </div>
  );
};

export default UpdateService;
