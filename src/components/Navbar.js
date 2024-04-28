import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { user, logout } = useAuthContext();

  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (response.ok) {
        logout();
      } else {
        // Handle logout error
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <header>
      <div className="container">
        <Link to="/homepage">
          <h1 id="title">Sentinelle</h1>
        </Link>
        <nav>
          {user ? (
            <div>
              <span>{user.email}</span>
              <button id="navlinks" onClick={handleLogout}>Log out</button>
            </div>
          ) : (
            <div>
              <Link to="/login">Login &nbsp;</Link>
              <Link to="/signup"><button id="Signup">Signup</button></Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
