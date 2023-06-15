import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  PresentationChartBarIcon,
  PowerIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { Avatar } from "@material-tailwind/react";
import avatarImg from "../../assets/images/pic.png";

export function CustomDrawer({ open, onClose }) {
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={onClose}
        overlay={false}
        className="bg-primaryYellow"
      >
        <div className="mb-2 flex items-center justify-between p-4 ">
          <Typography variant="h5" color="blue-gray">
            Attend Me Web
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={onClose}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>

        <div className="flex justify-center flex-col items-center text-white font-semibold">
          <Avatar src={avatarImg} alt="avatar" className="mb-2" />
          <Typography> John Senarath</Typography>
          <Typography> 3000186</Typography>
        </div>
        <hr />

        <div className="flex-grow=">
          <List className="text-white">
            <ListItem>
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Assign Jobs
            </ListItem>
            <hr />

            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
