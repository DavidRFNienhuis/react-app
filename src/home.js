import React, {useState} from 'react'
import Card from './context';
import img from './bank.png'

function Home(){
  const [status, setStatus] = React.useState('');

  return (
    <Card
    bgcolor="green"  
    txtcolor="black"
      header="BadBank Landing Module"
      status = {status}
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" />)}
    />
  );  
}
 export default Home;