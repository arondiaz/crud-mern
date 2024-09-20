import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <div className="bg-zinc-900 max-w-md p-10 rounded-md flex justify-center items-center h-full">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-gray-400 text-white px-4 py-2 my-4 rounded-xl"
        />

        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-gray-400 text-white px-4 py-2 my-4 rounded-xl"
        />

        <input
          type="password"
          {...register("password", { required: true })}
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
