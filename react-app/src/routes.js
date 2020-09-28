import React from 'react'
import { Switch,Route,Redirect } from "react-router-dom"
import ListBookContainer from "./page/listBookContainer"
import { TestContext } from "./page/testContext"


export const useRoute =()=>{

    return (
    <Switch>
        <Route path='/' exact>
            <ListBookContainer/>
        </Route>
        <Route path='/update' exact>
            <TestContext/>
        </Route>
        <Redirect to="/" />
    </Switch>
    )
}