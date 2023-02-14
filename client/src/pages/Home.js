// Node Modules
import React, { useRef } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, SEARCH_USERS } from '../utils/queries';
import { Link } from 'react-router-dom';
// Components
// import UserList from '../components/UserList';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_USERS);
//   const [searchUsers, { data: searchData }] = useLazyQuery(SEARCH_USERS);
//   const users = data?.users || [];
//   const searchResults = searchData?.searchUsers || [];
//   const inputRef = useRef();

  // const renderUserList = () => {
  //   if (loading) {
  //     return <h2>Loading...</h2>
  //   } else {
  //     return <UserList users={users} title="List of Users" />
  //   }
  // }

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await searchUsers({
  //     variables: {
  //       term: inputRef.current.value
  //     }
  //   });
  // }

  if (Auth.loggedIn()) {
    return (
    <div>
    <table class="table m-4">
  <thead>
    <tr>
      <th scope="col">Stock</th>
      <th scope="col">Shares</th>
      <th scope="col">Share Price</th>
      <th scope="col">Purchase Price</th>
    </tr>
  </thead>
  </table>
  </div>
  )
    }
  return (
  <div>
    <table class="table m-4">
  <thead>
    <tr>
      <th scope="col">Stock</th>
      <th scope="col">Shares</th>
      <th scope="col">Share Price</th>
      <th scope="col">Purchase Price</th>
    </tr>
  </thead>
  </table>
  <h4 className="ms-4 text-muted font-size-12 text-center">Please{' '}
  <Link to='login'> log in </Link> to see your portfolio</h4>
  </div>
//     <main>
//       <form onSubmit={handleSubmit}>
//         <label>Search</label>
//         <input
//           type="text"
//           ref={inputRef}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         <UserList
//           users={searchResults}
//           title="Search Results"
//         />
//       </div>
//       <div>
//         {renderUsername()}
//       </div>
//       <div>
//         {renderUserList()}
//       </div>
//     </main>
  );
};

export default Home;
