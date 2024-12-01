import { Home, Terminal, FileText } from 'lucide-react';
import Button from './Button'; 

const Footer: React.FC = () => {
  return (
    <div className="p-10 w-full max-w-96 bg-gray-800 text-gray-100 fixed bottom-3 left-1/2 transform -translate-x-1/2 py-4 px-6 flex justify-center items-center space-x-10 rounded-3xl shadow-lg">
      <Button Icon={Home} label="Home" path="/landingpage" className="hover:text-blue-400" />
      <Button Icon={Terminal} label="Terminal" path="/terminal" className="hover:text-green-400" />
      <Button Icon={FileText} label="Documents" path="/docs" className="hover:text-purple-400" />
    </div>
  );
};

export default Footer;
