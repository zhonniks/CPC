"use client";

import { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import cx from 'classnames'

export default function ContestDropdown({ session }) {

  const handleRedirectKBTUOPEN = ()     => {
    window.location.href = "http://localhost:3000/archive/"; 
  };

  const handleRedirectSDUOPEN= () => {
    window.location.href = "http://localhost:3000/sduopen/"; 
  };

  const handleRedirectIITUOPEN= () => {
    window.location.href = "http://localhost:3000/iituopen/"; 
  };

  const handleRedirectNUOPEN = () => {  
    window.location.href = "http://localhost:3000/nuopen/"; 
  };
 

  return (
    <div className="relative inline-block text-left">
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="text-white hover:text-blue-800 transition-colors">
           Archive
           
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={cx(active ? 'bg-gray-100' : '', 'relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-sm text-gray-700')}
                   onClick={handleRedirectKBTUOPEN}
                >
                  <p className="text-sm">KBTU OPEN</p>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={cx(active ? 'bg-gray-100' : '', 'relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-sm text-gray-700')}
                  onClick={handleRedirectSDUOPEN}
                >
                  <p className="text-sm">SDU OPEN</p>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={cx(active ? 'bg-gray-100' : '', 'relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-sm text-gray-700')}
                  onClick={handleRedirectIITUOPEN}
                >
                  <p className="text-sm">IITU OPEN</p>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={cx(active ? 'bg-gray-100' : '', 'relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-sm text-gray-700')}
                  onClick={handleRedirectNUOPEN}
                >
                  <p className="text-sm">NU OPEN</p>
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
