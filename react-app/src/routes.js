import React from 'react'
import { Switch,Route,Redirect } from "react-router-dom"
import CreateBookInputs from './page/book/createBook'
import ListBookContainer from "./page/book/listBookContainer"
import UpdateBook from './page/book/updateBook'
import No404 from './components/404';


export const useRoute =(isAuth)=>{

    if(isAuth){
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
return(<Switch>
    <Route path='/' exact>
            <div> авторизация</div>
            </Route>
      <Redirect to="/" />
</Switch>

)

}