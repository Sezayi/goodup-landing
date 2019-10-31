function Layout(props) {
  return (
    <div className="flex flex-col lg:h-screen lg:flex-row">
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
        .a {
            text-decoration: underline;
            color: #3C96DC;
        }
        ::-webkit-scrollbar {
            width: 0px;  /* Remove scrollbar space */
            background: transparent;  /* Optional: just make scrollbar invisible */
            -ms-overflow-style: none; /* IE 11 */
            scrollbar-width: none; /* Firefox 64 */
        }
      `}</style>
    </div>
  );
}

export default Layout;
