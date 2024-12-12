import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from "./operations/user/mutation";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateUserInput } from "./generated/gql/graphql";

export const CreateUser = () => {
  const [createUser, { data, loading, error }] =
    useMutation(CREATE_USER_MUTATION);

  const { register, handleSubmit } = useForm<CreateUserInput>();

  const onSubmit: SubmitHandler<CreateUserInput> = async (createUserInput) => {
    await createUser({ variables: { createUserInput } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create User</h1>

      <div>
        <label htmlFor="name">Name</label>
        <input {...register("name")} />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input type="number" {...register("age")} />
      </div>

      <button>Submit</button>

      {loading && <p>Loading...</p>}

      {data && (
        <ul>
          <li>Name: {data.createUser.name}</li>
          <li>Age: {data.createUser.age}</li>
          <li>ID: {data.createUser.id}</li>
        </ul>
      )}

      {error && <h2>There was an error!</h2>}
    </form>
  );
};
