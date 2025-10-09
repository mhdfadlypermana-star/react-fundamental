import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      age
      isMarried
    }
  }
`;

const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      name
      age
      isMarried
    }
  }
`;

function App() {
  const [userId, setUserId] = useState("");


  // Query user berdasarkan ID (hanya jalan kalau userId tidak kosong)
  const {
    data: getUserByIdData,
    loading: getUserByIdLoading,
    error: getUserByIdError,
    refetch,
  } = useQuery(GET_USER_BY_ID, {
    variables: { id: userId },
    skip: !userId, // biar ga error waktu userId kosong
  });

  // if (getUsersLoading) return <p>Loading dulu bre...</p>;
  // if (getUsersError) return <p>Error ngab: {getUsersError.message}</p>;

  return (
    <>
      <h1>Daftar Ninja 🥷</h1>

      {/* 🔍 Input ID untuk cari user */}
      <div>
        <input
          type="text"
          placeholder="Masukkan ID ninja..."
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={() => refetch()}>Cari!</button>
      </div>

      {/* 🧠 Hasil pencarian by ID */}
      {userId && (
        <div>
          {getUserByIdLoading ? (
            <p>Loading ninja terpilih...</p>
          ) : getUserByIdError ? (
            <p>Error ngab: {getUserByIdError.message}</p>
          ) : getUserByIdData?.getUserById ? (
            <>
              <h2>Ninja Pilihan</h2>
              <p>Name: {getUserByIdData.getUserById.name}</p>
              <p>Age: {getUserByIdData.getUserById.age}</p>
              <p>
                Married:{" "}
                {getUserByIdData.getUserById.isMarried ? "Yes" : "No"}
              </p>
            </>
          ) : (
            <p>Ga ketemu ninjanya bre 🥲</p>
          )}
        </div>
      )}

      {/* 🧾 Semua user
      <div>
        {getUsersData.getUsers.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Married: {user.isMarried ? "Yes" : "No"}</p>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default App;
