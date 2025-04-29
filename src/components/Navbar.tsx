import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut, User } from 'lucide-react';

const API_URL = "http://YOUR_API_SERVER_ADDRESS"; // Replace with your actual API server address

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userJSON = localStorage.getItem('currentUser');
    const authToken = localStorage.getItem('authToken');
    
    if (userJSON && authToken) {
      setCurrentUser(JSON.parse(userJSON));
      validateToken(authToken);
    }
  }, []);
  
  // Validate the token with the server
  const validateToken = async (token: string) => {
    try {
      const response = await fetch(`${API_URL}/api/validate-token`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
      });
      
      if (!response.ok) {
        // Token is invalid, log the user out
        handleLogout();
      }
    } catch (error) {
      console.error('Error validating token:', error);
      // On error, keep the user logged in, but log the error
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('authToken');
      
      if (token) {
        // Call logout API to invalidate the token on the server
        await fetch(`${API_URL}/api/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
      }
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      // Always clear local storage even if API fails
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
      setCurrentUser(null);
      setIsMenuOpen(false);
      navigate('/');
    }
  };

  return (
    <nav className="py-4 px-6 md:px-12 w-full fixed top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold">TV</span>
          </div>
          <span className="text-xl font-bold gradient-text">TV905</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">
            FAQ
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {currentUser ? (
            <div className="flex items-center gap-4">
              <div className="text-sm text-foreground/80">
                <span className="font-medium">{currentUser.email}</span>
              </div>
              <Button 
                variant="ghost" 
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Log out
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 btn-glow">
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col pt-2 gap-2">
              {currentUser ? (
                <>
                  <div className="text-sm text-foreground/80 pb-1">
                    <User className="h-4 w-4 inline mr-1" />
                    <span className="font-medium">{currentUser.email}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={handleLogout} 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Log in</Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
