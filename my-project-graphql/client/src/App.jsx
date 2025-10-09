import { useQuery,useMutation,gql } from "@apollo/client"

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

function App() {

  const {data, error, loading} = useQuery(GET_USERS);
  
  if(loading) return <p>Loading dulu bre...</p>;

  if(error) return <p>Error ngab : {error.message}</p>;

  return(
  <>
    <h1>Users</h1>
    <div> 
      {data.getUsers.map((user) => (
      <div>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Is Married: {user.isMarried ? "yes" : "no"}</p>


      </div>

    ))} </div>
    </>
  );
  
  
    
  
}

export default App
