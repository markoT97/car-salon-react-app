import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Icon } from "@material-ui/core";

const items = [
  { title: "Dashboard", icon: "dashboard", route: "/dashboard" },
  { title: "Orders", icon: "shopping_cart", route: "/orders" },
  { title: "Customers", icon: "people", route: "/customers" },
];

export const mainListItems = (
  <div>
    {items.map((item, i) => {
      return (
        <ListItem button key={i}>
          <ListItemIcon>
            <Icon>{item.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      );
    })}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
