import React, { useState } from "react";

function ArrayObjects() {
  const [phones, setPhones] = useState([]);
  const [phoneYear, setPhoneYear] = useState(new Date().getFullYear());
  const [phoneCompany, setPhoneCompany] = useState("");
  const [phoneModel, setPhoneModel] = useState("");

  function handleAdd() {
    const newPhone = {
      year: phoneYear,
      model: phoneModel,
      company: phoneCompany,
    };
    setPhoneYear(new Date().getFullYear());

    setPhoneModel("");

    setPhoneCompany("");

    setPhones((p) => [...p, newPhone]);
  }
  function handleRemove(index) {
    setPhones((p) => [p.filter((_, i) => i !== index)]);
  }
  function handleChangeYear(event) {
    setPhoneYear(event.target.value);
  }
  function handleChangeModel(event) {
    setPhoneModel(event.target.value);
  }
  function handleChangeCompany(event) {
    setPhoneCompany(event.target.value);
  }

  return (
    <div
      className="flex flex-col
      gap-10 border-zinc-100 p-20 text-zinc-50 justify-center items-center h-full bg-zinc-800"
    >
      <h1 className="text-6xl font-bold text-center">Phones</h1>
      <ul>
        {phones.map((phone, index) => (
          <li
            onClick={() => handleRemove(index)}
            className="flex
          gap-1"
            key={index}
          >
            {phone.year} {phone.model} {phone.company}
          </li>
        ))}
      </ul>
      <input
        className="text-black"
        type="number"
        value={phoneYear}
        onChange={handleChangeYear}
      />
      <input
        className="text-black"
        type="text"
        value={phoneCompany}
        onChange={handleChangeCompany}
        placeholder="Enter phone company"
      />
      <input
        className="text-black"
        type="text"
        value={phoneModel}
        onChange={handleChangeModel}
        placeholder="Enter phone model"
      />
      <button onClick={handleAdd}>Add Phone</button>
    </div>
  );
}

export default ArrayObjects;
