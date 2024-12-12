import { useQuery } from "@apollo/client";
import { GET_USER_QUERY } from "./operations/user/query";

export const GetUser = () => {
  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: { id: "12345" },
  });

  return (
    <div>
      <h1>Get User</h1>

      {loading && <p>Loading...</p>}

      {data && (
        <ul>
          <li>Name: {data.getUser.name}</li>
          <li>Age: {data.getUser.age}</li>
          <li>ID: {data.getUser.id}</li>
        </ul>
      )}

      {error && <h2>There was an error!</h2>}
    </div>
  );
};
