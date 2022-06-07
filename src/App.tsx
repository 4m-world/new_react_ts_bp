import { useAuthCheck } from '~services/auth';
import Providers from './Providers';

const App = () => {
  const authStatus = useAuthCheck();
  return <>WELCOME</>;
};
export default App;
