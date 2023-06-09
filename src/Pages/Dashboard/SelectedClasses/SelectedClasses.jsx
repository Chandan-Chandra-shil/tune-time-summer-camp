import React from 'react';
import UseSelectedAllClasses from '../../../hook/UseSelectedAllClasses';

const SelectedClasses = () => {
  const [selectedItem] = UseSelectedAllClasses()
  return (
    <div>
      <h2>select page</h2>
      <p>{ selectedItem?.length}</p>
    </div>
  );
};

export default SelectedClasses;