import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Link } from "@remix-run/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Install Heroicons if not already installed

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-sky-500'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between items-center'>
              {/* Logo or Brand Name */}
              <div className='text-black text-2xl font-semibold'>
                <Link to='/'>Feria do Livro do Porto</Link>
              </div>

              {/* Desktop Links */}
              <div className='hidden sm:flex space-x-4'>
                <Link
                  to='/program'
                  className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Program
                </Link>
                <Link
                  to='/about'
                  className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  About
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className='sm:hidden'>
                <DisclosureButton className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              <DisclosureButton
                as={Link}
                to='/program'
                className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'
              >
                About
              </DisclosureButton>
              <DisclosureButton
                as={Link}
                to='/about'
                className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'
              >
                Services
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
