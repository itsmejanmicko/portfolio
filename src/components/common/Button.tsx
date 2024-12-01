import { Link, useLocation } from 'react-router-dom';

interface ButtonProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    className?: string;
    path: string;
}

const Button: React.FC<ButtonProps> = ({ Icon, label, className, path }) => {
    const location = useLocation();
    const isActive = location.pathname ===path;
    return (
        <Link 
          to={path} 
          className={`flex flex-col items-center hover:text-blue-400 ${className} ${isActive ? 'text-blue-500' : ''}`}
        >
          <Icon className="h-4 w-6" />
          <span className="text-xs">{label}</span>
        </Link>
      );
};

export default Button;
