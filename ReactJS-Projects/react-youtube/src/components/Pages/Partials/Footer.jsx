import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <ul className="flex w-[230px] py-3 px-4 mx-auto flex flex-wrap text-xs text-gray-500 font-bold">
          <li className="mb-1 mr-2">About</li>
          <li className="mb-1 mr-2">Press</li>
          <li className="mb-1 mr-2">Copyright</li>
          <li className="mb-1 mr-2">Contact us</li>
          <li className="mb-1 mr-2">Creators</li>
          <li className="mb-1 mr-2">Advertise</li>
          <li className="mb-1 mr-2">Developers</li>
        </ul>
        <ul className="flex w-[230px] py-3 px-4 mx-auto flex flex-wrap text-xs text-gray-500 font-bold">
          <li className="mb-1 mr-2">Terms</li>
          <li className="mb-1 mr-2">Privacy</li>
          <li className="mb-1 mr-2">Policy & Safety</li>
          <li className="mb-1 mr-2">How youtube works</li>
          <li className="mb-1 mr-2">Test new features</li>
        </ul>
        <ul className="flex w-[230px] py-3 px-4 mx-auto flex flex-wrap text-xs text-gray-500 font-bold">
          <li className="mb-1 mr-2">© 2024 Google LLC</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
