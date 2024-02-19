import { ReactNode, useCallback, useState } from 'react';
import { Logo } from '@/components/Logo';
import { Button, Drawer, Menu, Navbar } from 'react-daisyui';

interface DashboardDrawerProps {
  children?: ReactNode;
  title: string;
}

const DashboardDrawer = ({ children, title }: DashboardDrawerProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);
  return (
    <Drawer
      open={visible}
      onClickOverlay={toggleVisible}
      side={
        <Menu className="p-4 w-60 md:w-80 h-full bg-base-200">
          <Menu.Item>
            <a>Sidebar Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Sidebar Item 2</a>
          </Menu.Item>
        </Menu>
      }
    >
      <Navbar className="w-full bg-base-300">
        <div className="flex-none lg:hidden">
          <Button shape="square" color="ghost" onClick={toggleVisible}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </Button>
        </div>
        <Logo width="20" />
        <div className="flex-1 px-2 mx-2">{title}</div>
        <div className="flex-none hidden lg:block">
          <Menu horizontal={true}>
            <Menu.Item>
              <a>Navbar Item 1</a>
            </Menu.Item>
            <Menu.Item>
              <a>Navbar Item 2</a>
            </Menu.Item>
          </Menu>
        </div>
      </Navbar>
      <div className="flex flex-grow items-center justify-center">
        {children}
      </div>
    </Drawer>
  );
};

export default DashboardDrawer;
