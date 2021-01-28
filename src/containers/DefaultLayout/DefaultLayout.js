import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {
  Button,Divider,SnackbarContent
} from '@material-ui/core'
import { getStock } from '../../Database/GetMethods'

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarHeader,
  AppSidebarForm,
  AppSidebarNav,
  AppSidebarFooter,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(){
    super()
    this.state = {
      open:false,
      stock:[]
    }
  }

  handleClick = () =>{
    this.setState({
      open:true
    })
  }

  handleClose = (e,reason) =>{
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      open:false
    })
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  componentDidMount(){
    getStock()
    .then(res=>{
      console.log(res)
      for (let i = 0; i < res.length; i++) {
        if (res[i].stock < 50) {
          this.setState({
            stock:res,
            open:true
          })
        }
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer /> 
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/login" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
        {
            <div>
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.open}
              autoHideDuration={4000}
              onClose={this.handleClose}
              message= {
                this.state.stock.map(s=>(
                  <div>
                    {s.stock < 50 ?
                    `stock of ${s.product_name} with ${s.combination_string} is in low quantity `
                    :null}
                    <Divider/>
                  </div>
                ))
              }
              // action={
              //   <React.Fragment>
              //     <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
              //       <CloseIcon fontSize="small" />
              //     </IconButton>
              //   </React.Fragment>
              // }
          />    
          </div>
        }

      </div>
    );
  }
}

const action = ()=>{
  this.setState({
    open:false
  })
}

export default DefaultLayout;
