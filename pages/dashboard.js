const Dashboard = ({ name, bio, blog }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{`Bio: ${bio}`}</p>
      <p>{`Blog: ${blog}`}</p>
    </div>
  );
};

Dashboard.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/billydowning");
  const user = await res.json();

  return user;
};

export default Dashboard;
