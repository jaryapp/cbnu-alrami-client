import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '@src/components/Home'
import { ApolloProvider } from '@apollo/client'

import { client } from '@src/apollo/client'
import '@src/assets/base/base.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" component={Home}></Route>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
