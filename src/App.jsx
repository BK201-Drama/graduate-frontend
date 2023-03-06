import { useRoutes } from 'react-router-dom';
import { getRouters } from './core/routes';

const App = () => {
  const elements = useRoutes(getRouters())
  return elements
};

export default App;