function Layout(props) {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      {props.children}

      <style jsx global>{`
        @font-face {
          font-family: "Edmondsans";
          src: url("/static/fonts/Edmondsans-Regular.otf");
          font-display: auto;
          font-style: normal;
        }
        @font-face {
          font-family: "Edmondsans-medium";
          src: url("/static/fonts/Edmondsans-Medium.otf");
          font-display: auto;
          font-style: normal;
          font-weight: 500;
        }
        .font-edmondsans {
          font-family: "Edmondsans";
        }
        .font-edmondsans-medium {
          font-family: "Edmondsans-medium";
        }
      `}</style>
    </div>
  );
}

export default Layout;
