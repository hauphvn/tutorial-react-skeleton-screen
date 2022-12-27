import React, { useEffect, useState } from 'react';
import SkeletonElement from "/src/skeletons/SkeletonElement";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      setProfile(data);
    }, 5000)
  }, [])
  return (
    <div className={'user'}>
      <h1>User Details</h1>
      <SkeletonElement type={'text'}/>
      <SkeletonElement type={'avatar'}/>
      <SkeletonElement type={'thumbnail'}/>
      <SkeletonElement type={'title'}/>
      {profile ? (
        <div className={'profile'}>
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      ) : (
        <div>
          Loading...
        </div>)}
    </div>
  );
};

export default User;
