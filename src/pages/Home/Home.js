import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to PlayShatranj ♟️</h1>
      <p>Sharpen your mind, play smarter, and enjoy every move.</p>

      <div style={{ marginTop: '30px' }}>
        <Link to="/about" style={{ margin: '10px', color: '#007bff' }}>About Us</Link>
        {/* <Link to="/how-it-works" style={{ margin: '10px', color: '#007bff' }}>How It Works</Link> */}
      </div>
    </div>
  );
}

export default Home;
