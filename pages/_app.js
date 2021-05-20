import App from 'next/app';

const BB2App = ({Component, pageProps, err}) => {
  return (
    <>
      <Component {...pageProps} err={err} />
    </>
  );
};

BB2App.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
  };
};

export default BB2App;
