'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined") {
      const isAuthenticated = localStorage.getItem('isAuthenticated');

      if (!isAuthenticated) {
        // Redirect them to the passwordGate page if not authenticated
        router.push('/page'); // Ensure this path is correct
      }
    }
  }, [router]); // Dependency on 'router' to rerun the effect if the router object changes
};

export default useAuth;
