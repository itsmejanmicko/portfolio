import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { number: '01', label: 'About', path: '/about' },
  { number: '02', label: 'Experience', path: '/experience' },
  { number: '03', label: 'Education', path: '/education' },
];

export default function TerminalNav() {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  // Find the index of the current path in navItems
  const currentIndex = navItems.findIndex(item => item.path === pathname);

  // Handlers for next and previous navigation
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + navItems.length) % navItems.length;
    navigate(navItems[prevIndex].path);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % navItems.length;
    navigate(navItems[nextIndex].path);
  };

  return (
    <>
      <div className="fixed left-12 top-0 h-full hidden lg:flex items-center z-49">
        <div className="h-full flex flex-col items-center">
          <div className="h-full w-[1px] bg-blue-500 relative">
            {navItems.map((item, index) => (
              <Link
                key={item.number}
                to={item.path}
                className={`absolute -left-1 flex items-center gap-4 transition-all duration-300 ${
                  pathname === item.path ? 'text-blue-500' : 'text-gray-400 hover:text-blue-400'
                }`}
                style={{ top: `${(index + 1) * 20}%` }}
              >
                <div className={`w-2 h-2 rounded-full ${pathname === item.path ? 'bg-blue-400' : 'bg-gray-400'}`}></div>
                <span className="text-sm">{item.number}</span>
                <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  pathname === item.path ? 'opacity-100' : ''
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed top-14 right-4 lg:hidden flex items-center justify-center z-50 space-x-2">
      <button
        onClick={handlePrev}
        className="px-1 py-1 bg-gray-800 text-xs text-white rounded-l-lg hover:bg-gray-700 shadow-lg"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="px-1 py-1 bg-gray-800 text-xs text-white rounded-r-lg hover:bg-gray-700 shadow-lg"
      >
        Next
      </button>
    </div>

    </>
  );
}
