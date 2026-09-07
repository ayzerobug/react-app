import { useState } from "react";
import Divider from "./components/Divider";
import LikeButton from "./components/LikeButton";

function States() {
  const [noOfItems, setNumberOfItems] = useState(20);
  const [isFirstBoxOpened, setIsFirstBoxOpened] = useState(false);
  const [name, setName] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const incrementNoOfItems = () => {
    setNumberOfItems((prev) => prev + 1);
  };

  const resetNumberOfItems = () => {
    setNumberOfItems(0);
  };

  const age = 15;

  //   if (age >= 18) {
  //     const message = "You are welcome to our website";
  //   } else {
  //     const message = "You must be up to 18 to signup on our website";
  //   }

  //   const message =
  //     age >= 18
  //       ? "You are welcome to our website"
  //       : "You must be up to 18 to signup on our website";

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="mb-2 text-lg font-semibold">
        We have {noOfItems} items in the {name}'s box
      </p>
      {isFirstBoxOpened && (
        <p className="mb-2 text-red-500 text-sm">First Box Already Opened</p>
      )}
      <div className="flex gap-2 items-center">
        <button
          onClick={resetNumberOfItems}
          className="border border-amber-800 text-amber-800 px-6 py-2 rounded-md"
        >
          Reset No.
        </button>
        <button
          onClick={incrementNoOfItems}
          className="bg-amber-800 text-white border-none px-6 py-2 rounded-md"
        >
          Increment
        </button>
        <button
          onClick={() => setIsFirstBoxOpened(!isFirstBoxOpened)}
          className="border border-red-500 text-red-500 px-6 py-2 rounded-md"
        >
          Toggle Box Opened
        </button>
      </div>

      <Divider />

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 px-4 rounded border-slate-300"
          placeholder="Enter your name"
        />
        <p className="mt-2 text-slate-600">Hello, {name || "stranger"}!</p>
      </div>

      <Divider />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-amber-800 text-white border-none px-6 py-2 rounded-md"
      >
        {isOpen ? "Close" : "Open"} Menu
      </button>

      {isOpen && (
        <ul className="bg-white shadow rounded p-4 mt-2">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}

      <Divider />

      <LikeButton />
    </div>
  );
}

export default States;
