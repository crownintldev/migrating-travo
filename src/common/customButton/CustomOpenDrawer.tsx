// @ts-nocheck

// React Imports
import React, { useState } from 'react';

import { Button } from "@/components/ui/button"
import FormDrawer from '../drawer/FormDrawer';

const CustomOpenDrawer = ({
  ButtonTitle,
  drawerTitle,
  Form,
  fetchApi,
  api,
  _id,
  removeSelection,
  anchor,
  component,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <div>
      {component ? (
        <div onClick={toggleDrawer}>{component}</div>
      ) : (
        <Button onClick={toggleDrawer}>{ButtonTitle}</Button>
      )}
      <FormDrawer
        open={drawerOpen}
        toggle={toggleDrawer}
        drawerTitle={drawerTitle}
        Form={Form}
        anchor={anchor || 'left'}
        fetchApi={fetchApi}
        api={api}
        _id={_id || ''}
        removeSelection={removeSelection || ''}
      />
    </div>
  );
};

export default CustomOpenDrawer;
