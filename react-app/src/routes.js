import React from 'react'
import { Switch,Route,Redirect } from "react-router-dom"
import CreateBookInputs from './page/createBook'
import ListBookContainer from "./page/listBookContainer"
import UpdateBook from './page/updateBook'
import No404 from './components/404';


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
        <Route path='/404' exact>
            <No404/>
        </Route>
        <Redirect to="/404" />
    </Switch>
    )
}