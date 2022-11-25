import { useEffect } from 'react';

export const Settings = () => {
  useEffect(() => {
    document.title = 'Settings';
  });
  return <h3>Settings</h3>;
};
