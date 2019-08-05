function Layout(props) {
    return (
      <div className="flex flex-col h-screen lg:flex-row">
        {props.children}
        
        <style jsx global>{`
        @font-face {
        font-family: 'Edmondsans';
        src: url('/static/fonts/Edmondsans-Medium.otf');
        font-weight: bold;
        font-display: auto;
        font-style: normal;
        }
        `}</style>
      </div>
    )
  }
  
  export default Layout