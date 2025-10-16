import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import { usePreferencesStore, type Theme } from './store/prefs';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

function ThemeManager() {
  const theme = usePreferencesStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (themeToApply: 'dark' | 'light') => {
      if (themeToApply === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      applyTheme(mediaQuery.matches ? 'dark' : 'light');

      const handleChange = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      applyTheme(theme);
    }
  }, [theme]);

  return null; // This component does not render anything
}


function App() {
  const { setLocation } = usePreferencesStore();

  useEffect(() => {
    // Attempt to get user's location on initial load
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          name: 'Your Location',
          country: '',
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.warn("Geolocation permission denied or failed. Defaulting to New York.");
        // If it fails, the default New York location from the store will be used.
      },
      { timeout: 5000 }
    );
  }, [setLocation]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeManager />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Simple routing, could be expanded for a /week page */}
          <Route path="/week" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;