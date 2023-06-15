import React, { useState, useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";
import CustomNav from "../../components/Navbar/CustomNav";
import { CustomDrawer } from "../../components/Drwer/CustomDrawer";
import CustomList from "../../components/List/CustomList";
import axios from "axios";

function Home() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    axios
      .get(
        "https://esystems.cdl.lk/QRApp_BackEnd/api/attendance/GetLocationsByCompany?company=DTS",
        {
          headers: {
            UserId: "DTSUSER",
            Password: "Rayan@123",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const api = [
    {
      label: "Option 1",
      value: "option_1",
    },
    {
      label: "Option 2",
      value: "option_2",
    },
    {
      label: "Option 3",
      value: "option_3",
    },
  ];

  return (
    <React.Fragment>
      <CustomNav onOpenDrawer={openDrawer} />
      <CustomDrawer open={drawerOpen} onClose={closeDrawer} />

      <div className="p-2">Hello User</div>

      <div className="w-full mt-4 px-2  ">
        <Select label="Select Version">
          {api.map((option) => (
            <Option key={option.id} value={option.id}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>
      <div className="w-full mt-4 px-2  ">
        <Select label="Select Version">
          {api.map((option) => (
            <Option key={option.id} value={option.id}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>

      <div className="p-2 ">
        <CustomList />
      </div>
    </React.Fragment>
  );
}

export default Home;
