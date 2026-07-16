import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { CountdownOverlay } from './CountdownOverlay';
import { WelcomeModal } from '../personalization/WelcomeModal';
import { useScreenInit } from '../../useScreenInit';
export function Layout() {
  useScreenInit();
  return (
    <div className="min-h-screen flex flex-col font-body bg-light">
      <CountdownOverlay />
      <WelcomeModal />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>);

}