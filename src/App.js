import React, { useEffect, useState } from 'react';
import Users from './Component/users'

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(async res => {
      if (res.status !== 200) {
        setData('uh oh error!');
      }
      const data = await res.json();
      setData(data);
    });
  }, [setData, url]);

  return [data];
}

const App = () => {
  const [harveyData] = useFetch('/user/harvey');
  if (harveyData === null){
    return <div></div>
  }
  return (
    <div>
      <Users 
      users={harveyData}/>
    </div>
  );
}

export default App;
