import { useState, useCallback } from 'react';
import { Drawer, Menu, Navbar, Button } from 'react-daisyui';
import { Logo } from '@/components/Logo';
const dashboard = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);
  return (
    <div>
      return{' '}
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
            <Logo />
          </div>
          <p className="flex-1 px-2 mx-2">Auction</p>
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
          Content
        </div>
      </Drawer>
    </div>
  );
};

export default dashboard;
