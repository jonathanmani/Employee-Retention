import React from 'react'
import AppNav from '../../Layouts/Admin/AdminNav'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/User/context'
import Page from '../../Layouts/Page'
import { useEffect } from 'react'
const Dashboard = () => {
  const {firstName, lastName, email} = useContext(UserContext)
  console.log(firstName + "this is the first name")

  return (
    <>
    <AppNav>
        <Page>
            {firstName}
            <br/>
            {lastName}
            <br/>
            {email}
        </Page>
    </AppNav>
    </>
  )
}

export default Dashboard