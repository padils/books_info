import React from 'react'
import { Switch,Route,Redirect } from "react-router-dom"
import CreateBookInputs from './page/createBook'
import ListBookContainer from "./page/listBookContainer"
import { TestContext } from "./page/testContext"
import UpdateBook from './page/updateBook'


export const useRoute =()=>{

    return (
    <Switch>
        <Route path='/' exact>
            <ListBookContainer/>
        </Route>
        <Route path='/create' exact>
            <CreateBookInputs/>
        </Route>
        <Route path='/update/:id' exact>
            <UpdateBook/>
        </Route>
        <Redirect to="/" />
    </Switch>
    )
}