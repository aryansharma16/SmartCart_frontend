import React from 'react'
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  console.log("kkmdmckmd")
  let navigate = useNavigate()
  const handleClick = async (e) => {
      e.preventDefault();
     try {
      navigate('/user/samp')
     } catch (error) {
      console.log(error)
     }
    };
  return (
  <>
  {/* <Header /> */}

    <Layout title={'Dashboard - Ecom'}>

    <>
    {console.log("Hey from this")}
    <div className='dashboard_container'></div>
      <h>User Dashboard page</h>
      
      <button onClick={handleClick}> Ckick Here Route next</button>
    </>
    </Layout>
  </>
  )
}

export default Dashboard
