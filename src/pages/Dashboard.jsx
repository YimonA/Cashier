
import PropTypes from "prop-types";

const Dashboard = ({ view }) => {
  
  Dashboard.propTypes = {
    view: PropTypes.any,
  };
  return (
      <div className=" container-fluid min-h-screen bg-[var(--base-color)]">
        <div className=" min-h-full bg-[var(--sidebar-color)] flex items-stretch">
          {view}
        </div>
      </div>
  );
};

export default Dashboard;
