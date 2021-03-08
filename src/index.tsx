import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '@src/components/Home'
import Notice from '@src/components/Notice'
import { ApolloProvider } from '@apollo/client'

import { client } from '@src/apollo/client'
import '@src/assets/style/base.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/notice" component={Notice}></Route>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
