const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const tabs = ["Home", "Create Post"];
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };


  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-screen"
      style={{ width: "180px", height:"650px"}}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">React Blog</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab}>
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === tab && "active"
              }`}
              aria-current={selectedTab === tab ? "page" : undefined}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://placehold.co/32x32/1e90ff/ffffff?text=U"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>User</strong>
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
