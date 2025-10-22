'use client';

import react from 'react'
import { useNavigation } from '../lib/navigation';
import HomePage from '../app/page';
import AboutPage from '../app/about/page';
import ServicesPage from '../app/services/page';
import ProjectsPage from '../app/projects/page';
import SustainabilityPage from '../app/sustainability/page';
import ContactPage from '../app/contact/page';

const routes: Record<string, () => JSX.Element> = {
  '/': HomePage,
  '/about': AboutPage,
  '/services': ServicesPage,
  '/projects': ProjectsPage,
  '/sustainability': SustainabilityPage,
  '/contact': ContactPage,
};

export function Router() {
  const { currentPath } = useNavigation();
  const Component = routes[currentPath] || HomePage;
  
  return <Component />;
}
