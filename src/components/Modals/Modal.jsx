import { useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import toast from "react-hot-toast";

const ModalSection = () => {
  const [openModal, setOpenModal] = useState(true);
  const [orderDetalis, setOrderDetalis] = useState({
    fullName: "",
    address: "",
    mobileNo: "",
    pincode: "",
  });

  const handleOnChange = (e) => {
    setOrderDetalis({ ...orderDetalis, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!orderDetalis.fullName || !orderDetalis.address || !orderDetalis.mobileNo || !orderDetalis.pincode) {
      return toast.error("All fields are required")
    } else {
      toast.success("Order successfull");
      onCloseModal()
    }

  }

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetalis("");
  }
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Checkout</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="FullName" value="Your Full Name" />
              </div>
              <TextInput
                id="fname"
                name="fullName"
                value={orderDetalis.fullName}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your Address" />
              </div>
              <TextInput
                id="password"
                value={orderDetalis.address}
                onChange={handleOnChange}
                name="address"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="pincode" value="Enter your Pin code" />
              </div>
              <TextInput
                id="pincode"
                value={orderDetalis.pincode}
                onChange={handleOnChange}
                name="pincode"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone No" value="Enter your Mobile No" />
              </div>
              <TextInput
                id="mobileNo"
                value={orderDetalis.mobileNo}
                onChange={handleOnChange}
                name="mobileNo"
                required
              />
            </div>
            <div className="w-full">
              <Button onClick={handleSubmit}>Order Now</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSection;
