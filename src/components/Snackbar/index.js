import React, {useEffect} from 'react';

import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

 export default function Snackbar(props) {
    console.log('in snackbar')
    const Container = wrapComponent(props.showSnackbar )
  
  return (
    <SnackbarProvider position="bottom">
      <Container />
    </SnackbarProvider>
  );
} 

/* const Container = wrapComponent(function({ createSnackbar }) {
  function showSnackbar() {
    createSnackbar({
      message: 'Hello Snackbar!',
      dismissable: true,
      pauseOnHover: false,
      progressBar: false,
      sticky: false,
      theme: 'success',
      timeout: 3000
    });
  }
 
}); */

