import React from "react";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { CustomDrawer } from "../Drwer/CustomDrawer";

export default function CustomNav({ onOpenDrawer }) {
  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-primaryYellow">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Attend Me Web
          </Typography>
          <div className="flex items-center gap-4">
            <IconButton onClick={onOpenDrawer} variant="text" color="brown">
              <i class="fa-sharp fa-solid fa-bars"></i>
            </IconButton>
          </div>
          <CustomDrawer opendrawer={onOpenDrawer} />
        </div>
      </Navbar>
    </>
  );
}
