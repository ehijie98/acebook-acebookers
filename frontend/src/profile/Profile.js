import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = ({userId}) => {
  const [user, setUser] = useState(null);

  useEffect(() =>{
    fetch(`/users/user${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, [userId]);

  if (!user){
    return (
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    );
  }

  return (
    <div class="card text-center">
      <div class="card-header"></div>
      <div class="card-body">
        <h5 class="card-title">{user.firstName}{user.lastName}</h5>
        <p class="card-text">
          date of birth
          post count
          user since
        </p>
        <a href="/posts/:id" class="btn btn-primary">
          See Posts
        </a>
      </div>
      <div class="card-footer text-muted"> last login 2 days ago</div>
    </div>
  );


}

export default Profile;

// import React, { useState, useEffect } from "react";
// import "./Profile.css";

// const Profile = ({userId}) => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [userProfileData, setUserProfileData] = useState(null);

//   useEffect(() =>{
//     fetch(`/users/user${userId}`)
//       .then(response => response.json())
//       .then(data => {
//         setUser(data);
//         setIsLoading(false);
//       })
//       .catch(error => console.log(error));
//   }, [userId]);

//   useEffect(() => {
//     if (user) {
//       fetch(`/users/user${userId}/profile-data`)
//         .then(response => response.json())
//         .then(data => setUserProfileData(data))
//         .catch(error => console.log(error));
//     }
//   }, [user, userId]);

//   if (isLoading) {
//     return (
//       <button class="btn btn-primary" type="button" disabled>
//         <span
//           class="spinner-grow spinner-grow-sm"
//           role="status"
//           aria-hidden="true"
//         ></span>
//         Loading...
//       </button>
//     );
//   }
  
//   return (
//     <div class="card text-center">
//       <div class="card-header"></div>
//       <div class="card-body">
//         <h5 class="card-title">{user.firstName} {user.lastName}</h5>
//         {userProfileData && (
//           <p class="card-text">
//             Date of Birth: {userProfileData.dateOfBirth}<br />
//             Post Count: {userProfileData.postCount}<br />
//             User Since: {userProfileData.userSince}<br />
//           </p>
//         )}
//         <a href="/posts/:id" class="btn btn-primary">
//           See Posts
//         </a>
//       </div>
//       <div class="card-footer text-muted">Last login 2 days ago</div>
//     </div>
//   );
// }

// export default Profile;
