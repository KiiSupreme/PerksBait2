<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Perk’s Bait & Tackle Shop</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body { margin: 0; font-family: Arial, sans-serif; background: #eaf6ff; }
    header { background: #0b3a5a; color: white; padding: 20px; text-align: center; }
    .hero { padding: 40px 20px; text-align: center; background: linear-gradient(to bottom, #0b3a5a, #1c6ea4); color: white; }
    .btn { padding: 10px 15px; margin: 5px; border: none; cursor: pointer; border-radius: 6px; }
    .btn-blue { background: #1c6ea4; color: white; }
    .btn-green { background: #1fa34a; color: white; }
    .btn-orange { background: #ff8c00; color: white; }
    section { padding: 20px; max-width: 900px; margin: auto; }
    .card { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
    footer { text-align: center; padding: 15px; background: #ddd; }
  </style>
</head>
<body>

<div id="root"></div>

<script type="text/babel">

function App() {
  return (
    <div>
      <header>
        <h1>Perk’s Bait & Tackle Shop</h1>
        <p>Your Trusted Bait Shop in Lantana, Florida</p>
      </header>

      <div className="hero">
        <h2>Your Trusted Bait & Tackle Shop in Lantana</h2>
        <p>Live bait, quality tackle, and expert fishing advice for every trip.</p>
        <div>
          <button className="btn btn-blue">Visit Us Today</button>
          <button className="btn btn-green">Call Now</button>
          <button className="btn btn-orange">Get Directions</button>
        </div>
      </div>

      <section>
        <h2>About Us</h2>
        <p>
          Perk’s Bait & Tackle is a trusted local shop in Lantana offering live bait,
          fishing tackle, and expert advice. We help anglers of all levels catch more fish.
        </p>
      </section>

      <section>
        <h2>Products & Services</h2>
        <div className="card">Live Bait</div>
        <div className="card">Saltwater Tackle</div>
        <div className="card">Freshwater Tackle</div>
        <div className="card">Rod & Reel Essentials</div>
        <div className="card">Fishing Accessories</div>
        <div className="card">Quick Rod Repairs</div>
      </section>

      <section>
        <h2>Reviews</h2>
        <div className="card">⭐ “Best bait shop around—great prices and service.”</div>
        <div className="card">⭐ “Staff is very knowledgeable and helpful.”</div>
        <div className="card">⭐ “Always fresh bait and fast service.”</div>
      </section>

      <section>
        <h2>Contact</h2>
        <p>302 Wickline Blvd, Lantana, FL 33462</p>
        <p>(561) 582-3133</p>
        <p>Open daily • Closes 7 PM</p>
        <button className="btn btn-green">Call Now</button>
        <button className="btn btn-orange">Get Directions</button>
      </section>

      <footer>
        © {new Date().getFullYear()} Perk’s Bait & Tackle Shop
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

</script>

</body>
</html>
