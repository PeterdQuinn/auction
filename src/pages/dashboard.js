import { useState, useCallback } from 'react';
import DashboardDrawer from '@/components/Drawer';
import { Logo } from '@/components/Logo';
const dashboard = ({ children, title }) => {
  return <DashboardDrawer title="Auction"></DashboardDrawer>;
};

export default dashboard;
