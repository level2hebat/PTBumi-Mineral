'use client';

import react from 'react'
import { useNavigation } from '../lib/navigation';
import { ReactNode, MouseEvent } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Link({ href, children, className, onClick }: LinkProps) {
  const { navigate } = useNavigation();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(href);
    if (onClick) onClick();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
