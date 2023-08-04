import React from 'react'
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'

const Dashboard = () => {
  
  return (
  <>
  {/* <Header /> */}

    <Layout title={'Dashboard - Ecom'}>

    <>
    {console.log("Hey from this")}
    <div className='dashboard_container'></div>
      <h>Dashboard page</h>
      
    </>
    </Layout>
  </>
  )
}

export default Dashboard
