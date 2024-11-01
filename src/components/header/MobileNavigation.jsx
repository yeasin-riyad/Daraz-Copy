"use client";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/constants/constants";



const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div className="text-2xl md:hidden text-gray-500 hover:text-themeColor duration-200">
      <RiMenu3Fill onClick={openModal} />

      <Dialog open={isOpen} as="div" className="relative z-10 md:hidden" onClose={closeModal}>
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="fixed inset-0 z-20 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              className="relative w-full max-w-md rounded-xl p-6 transform transition-all duration-300 ease-out bg-white dark:bg-gray-900 dark:text-white"
            >
              {/* Close Icon in the top-right */}
              <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-themeColor">
                <RiCloseLine size={24} />
              </button>

              <Dialog.Title className="text-lg font-semibold mb-4 text-center">Menu</Dialog.Title>

              <div className="border-b border-b-gray-400 mb-4">
                <div className="flex flex-col gap-2 text-sm font-medium">
                  {navigation.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="hover:text-themeColor duration-200 py-2 border-b border-gray-300 dark:border-gray-700"
                      onClick={closeModal}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href="/signin"
                    className="hover:text-themeColor duration-200 py-2 border-b border-gray-300 dark:border-gray-700"
                    onClick={closeModal}
                  >
                    Please Sign in to view your cart
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Hotline <span className="text-black dark:text-white">+88 0123456789</span>
                </p>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileNavigation;
