import Header from "./Header";

/* Layout of the site */
function Layout({children, leave}) {
  return (
    <>
      <Header />
      <main style={!leave ? {transform: "translateY(100vh)"} : null}>
        {children}
      </main>
    </>
  );
}

export default Layout;
