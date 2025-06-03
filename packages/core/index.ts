import  {makeInstaller}  from '../utils/install';
import components from './components'; 
const installer = makeInstaller(components);
export * from '../components';
export default installer