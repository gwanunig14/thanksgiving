import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">Thanksgiving 2023</div>
      <div className="subtitle">Everything you need to know</div>
      <div className="toprow">
        <div className="location">
          <a className="place" href="https://cottageschristianretreat.com">
            Cottages Christian Retreat
          </a>
          <div className="address street">22026 Front Beach Road</div>
          <div className="address city">Panama City Beach, FL 23413</div>
          <div>Check-in begins at 2PM CST on Tuesday 11/21</div>
          <div>Contact Morgan for your keys.</div>
          <div>210-385-6295</div>
        </div>
        <div className="provided amenities">
          <div className="title">They Provide</div>
          <li>Toilet Paper</li>
          <li>Trash Bags</li>
          <li>WiFi</li>
          <li>Coin Laundry</li>
          <li>Outdoor Grills</li>
        </div>
        <div className="provided cottage">
          <div className="title">Each Cottage Contains</div>
          <li>Utensils</li>
          <li>Cookware</li>
          <li>Toaster</li>
          <li>Coffee Maker</li>
          <li>Microwave</li>
          <li>Oven</li>
          <li>Refrigerator</li>
        </div>
        <div className="provided kitchen">
          <div className="title">The Kitchen Includes</div>
          <li>Ovens</li>
          <li>Cookware</li>
          <li>Gas Stove</li>
          <li>Flat Top Grill</li>
          <li>Microwave</li>
          <li>Giant Fridge</li>
          <li>Giant Freezer</li>
          <li>Cooking Utensils</li>
          <li>Serving Utensils</li>
        </div>
      </div>
      <div className="pack">
        <div className="title">You NEED to pack</div>
        <li>Sheets</li>
        <li>Blankets</li>
        <li>Pillows</li>
        <li>Towels</li>
        <li>Sponges</li>
        <li>Dish Soap</li>
        <li>Hand Soap</li>
        <li>Hygeine Products</li>
        <li>Paper Towels</li>
        <li>Coffee Filters</li>
      </div>
      <div className="checkout">
        We only have to turn in our keys when we checkout, but a thorough
        cleaning will help us be invited back.
      </div>
      <div className="signup">
        <a href="https://www.perfectpotluck.com/meals.php?t=JCCP3959&v=3f1b929876">
          Sign up to help with Thanksgiving Lunch!
        </a>
      </div>
    </div>
  );
}

export default App;
