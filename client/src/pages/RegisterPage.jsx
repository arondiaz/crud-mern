import { useState } from "react";

const RegisterPage = () => {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(register);
  };

  return (
    <div className="bg-zinc-900 max-w-md p-10 rounded-md flex justify-center items-center h-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={register.username}
          onChange={handleInputChange}
          placeholder="ingresa tu nombre de usuario"
          className="w-full bg-gray-400 text-white px-4 py-2 my-4 rounded-xl"
        />

        <input
          type="email"
          name="email"
          value={register.email}
          onChange={handleInputChange}
          className="w-full bg-gray-400 text-white px-4 py-2 my-4 rounded-xl"
        />

        <input
          type="password"
          name="password"
          value={register.password}
          onChange={handleInputChange}
          className="w-full bg-gray-400 text-white px-4 py-2 my-4 rounded-xl"
        />

        <button
          type="submit"
          className="bg-purple-950 rounded-xl text-white px-4 py-2"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
