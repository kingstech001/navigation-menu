'use client';

import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import useAuth from '@/hooks/useAuth';
// import useAuth from '../../hooks/useAuth';

const NavigationMenu: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <div className="hidden md:block md:transition-all">
        <DesktopNavigation isAuthenticated={isAuthenticated} />
      </div>
      <div className="block md:hidden md:transition-all">
        <MobileNavigation isAuthenticated={isAuthenticated} />
      </div>
    </div>
  );
}

export default NavigationMenu;
