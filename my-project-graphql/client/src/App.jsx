import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUser {
    getUsers {
      id
      age
      name
      isMarried
    }
  }
`;

const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      age
      name
      isMarried
    }
  }
`;

function App() {
  // ambil semua user
  const {
    data: getUsersData,
    error: getUsersError,
    loading: getUsersLoading,
  } = useQuery(GET_USERS);

  // ambil user berdasarkan id (misal id=1)
  const {
    data: getUserByIdData,
    error: getUserByIdError,
    loading: getUserByIdLoading,
  } = useQuery(GET_USER_BY_ID, {
    variables: { id: "1" }, // <- WAJIB
  });

  if (getUsersLoading) return <p>Loading dulu bre...</p>;
  if (getUsersError) return <p>Error ngab: {getUsersError.message}</p>;

  return (
    <>
      <div>
        {getUserByIdLoading ? (
          <p>Loading ninja...</p>
        ) : getUserByIdError ? (
          <p>Error ninja: {getUserByIdError.message}</p>
        ) : (
          <>
            <h2>Ninja Pilihan</h2>
            <p>Name: {getUserByIdData?.getUserById?.name}</p>
            <p>Name: {getUserByIdData?.getUserById?.age}</p>
          </>
        )}
      </div>

      <h1>Users</h1>

      <div>
        {getUsersData?.getUsers.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Is Married: {user.isMarried ? "yes" : "no"}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
