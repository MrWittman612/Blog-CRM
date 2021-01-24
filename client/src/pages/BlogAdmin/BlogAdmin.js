import React from 'react';
import { Admin, Resource } from 'react-admin';
import Axios from 'axios';

const RestProvider = Axios('/api/blogs');

export function BlogAdmin() {
  return (
    <Admin dataProvider={RestProvider}>
      <Resource name='blogs' />
    </Admin>
  );
}
