import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form'
import z from 'zod';

function App() {

  const registerSchema = z.object({
    first_name: z.string().min(1, { message: "First name is required" }),
    last_name: z.string().min(1, { message: "Last name is required" }),
    email: z.string().min(1, { message: "email name is required" }).email({ message: "email must be a valid email address" }),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirm_password: z.string().min(6, "Confirm password must be at least 6 characters long")
  }).refine(data => data.password === data.confirm_password,
    { message: "Passwords do not match", path: ["confirm_password"] });

  type inputTypes = z.infer<typeof registerSchema>;

  const { register, handleSubmit, formState: { errors } } = useForm<inputTypes>({
    mode: "onChange",
    resolver: zodResolver(registerSchema)
  });





  const onSubmit: SubmitHandler<inputTypes> = (data) => {
    console.log(data);
  }

  return (
    <>
      <h2>hello react</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Enter your first name" {...register("first_name")} />
        {errors.first_name && <p>{errors.first_name.message}</p>}
        <input type="text" placeholder="Enter your last name" {...register("last_name")} />
        {errors.last_name && <p>{errors.last_name.message}</p>}
        <input type="email" placeholder="Enter your email"  {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input type="password" placeholder="Enter your password" name="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <input type="password" placeholder="Confirm your password" name="confirm_password" {...register("confirm_password")} />
        {errors.confirm_password && <p>{errors.confirm_password.message}</p>}

        <button type="submit">Signup</button>


      </form>
    </>
  )
}

export default App
