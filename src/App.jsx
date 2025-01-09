

import Layout from './Views/Components/Layout';
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
  <Layout>
      <Outlet/>
  </Layout>
  )
}

export default App