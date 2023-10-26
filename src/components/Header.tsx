const Header = () => {
  return (
    <>
      <div className="header-flexbox">
        <div className="header-headline">
          <h1>Squidward <br />Quincy <br /> Tentacles</h1>
          {/* <h2>Bikini Bottom's Foremost Artist and Cultural Architect</h2> */}
        </div>
        <div>
          <img src="/squiddyProfile2.png" alt="" className="header" />
        </div>
      </div>
        <div>
          <circle className="header-background-blur"/>
        </div>
    </>
  );
};

export default Header;
