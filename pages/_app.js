/**
 * Este archivo es necesario para que funcione REDUX en NEXT.JS.
 * Funciona como contenedor del estado global, así todos las 
 * demás páginas y otros componentes solo tienen que usar el 
 * connect para acceder al estado y a los action para cambiar el
 * estado. Para ello se usa el mapStateToProps y mapDispatchToProps
 * como normalmente se usa en REDUX.
 * ref: https://github.com/zeit/next.js/blob/master/examples/with-redux-wrapper/
 */
import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
    }

    render () {
      const { Component, pageProps, store } = this.props
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      )
    }
  }
)