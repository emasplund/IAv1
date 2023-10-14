import React, {useState} from 'react';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
        <h1>Student Physical Wellness Resources</h1>
      </header>

      <div style={{ display: 'flex' }}>
      <div style={{ height: '100vh', width: '200px', backgroundColor: '#f0f0f0', padding: '10px', borderRight: '1px solid #ccc' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <span style={{ marginBottom: '5px', width: '100%', textAlign: 'left' }}>Exercise</span>
          <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: '20px' }}>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none'}} onClick={() => handleCategoryClick('Local Resources')}>Local Resoures</button>
            </li>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none' }} onClick={() => handleCategoryClick('Workout Ideas')}>Workout Ideas</button>
            </li>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none' }} onClick={() => handleCategoryClick('Making a Plan')}>Making a Plan</button>
            </li>
          </ul>
        </li>
        <li>
          <span style={{ marginBottom: '5px', width: '100%', textAlign: 'left'}}>Food</span>
          <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: '20px' }}>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none'}} onClick={() => handleCategoryClick('Recipes')}>Recipes</button>
            </li>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none' }} onClick={() => handleCategoryClick('Nutrition Tips')}>Nutrition Tips</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div style={{ flex: 1, padding: '20px' }}>

        {selectedCategory === null && (
          <p>Welcome to BYU student wellness resources. This website is dedicated to connecting students with easy and cheap wellness options to improve physical wellness. Click on a tab to get started!</p>
        )}

        {selectedCategory === 'Local Resources' && (
          <div>
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>BYU Resources</h3>
            <p>Did you know that BYU has facilities, intermural sports teams, and classes that can all help you get exercise? Check out this link to see all that campus has to offer for free:</p>
            <a href="https://studentwellness.byu.edu/">BYU Student Resources</a>
          </div>

          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>Provo Rec Center</h3>
            <p>The Provo Rec Center offers classes, swimming facilities, and a gym all for a low cost. Check out their membership programs or their day prices and try it out for a day:</p>
            <a href="https://studentwellness.byu.edu/">Provo Rec Center HomePage</a>
          </div>
          </div>
        )}

        {selectedCategory === 'Workout Ideas' && (
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>30 Ideas For Every Day</h3>
            <p>As a student finding the time to exercise can be daunting. However, there are plenty of easy ways to exercise that don't involve a gym or equipment.
            Doing chores, hiking, and dance parties are all great ways to burn calories. Check out this link for more options on what you could do to get your exercise in today!</p>
            <a href="https://www.cancerresearchuk.org/get-involved/find-an-event/the-exercise-challenge/30-ways-to-exercise">30 Easy Exercise Ideas</a>
          </div>
        )}

        {selectedCategory === 'Making a Plan' && (
          <div>
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>Where Do I Start?</h3>
            <p>Having trouble knowing where to start? Learning some general tips for exercise can you make you feel more comfortable with your workout
             routine. Learn to set realistic goals and to get a variety of different types of exercise in. Check out this site for more tips on where to begin</p>
            <a href="https://www.healthline.com/nutrition/how-to-start-exercising">Exercise Tips</a>
          </div>
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>Making a Routine</h3>
            <p>Are videos more your speed? Watch this video to learn how to make a well rounded workout routine so you can exercise with confidence.</p>
            <a href="https://www.youtube.com/watch?v=Wa4f7f5y7uQ">Make a Routine</a>
          </div>
          </div>
        )}

        {selectedCategory === 'Recipes' && (
          <div>
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>Healthy Dinners</h3>
            <p>Eating better can improve your life in several ways. Try out some of these 75 healthy recipes to get some fun variety in your nutrition.</p>
            <a href="https://www.delish.com/cooking/recipe-ideas/g3733/healthy-dinner-recipes/">75 Better For You Recipes</a>
          </div>
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>Low Effort Recipes</h3>
            <p>Low on time and need a meal quick? These recipes are healthy and fast, making them great for a student with a tight scheudle.</p>
            <a href="https://www.eatwell101.com/low-effort-healthy-dinners-recipes">Low Effort Dinners</a>
          </div>
          </div>
        )}

        {selectedCategory === 'Nutrition Tips' && (
          <div>
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>Healthy Eating 101</h3>
            <p>Looking for a nutrition crash course? Look no further. Learn some simple nutrition tips and basics that will help you find easy ways to improve
             your diet.</p>
            <a href="https://www.healthline.com/nutrition/how-to-eat-healthy-guide">How to Eat Healthy</a>
          </div>
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>Simple Nutrition Tips</h3>
            <p>There's a lot to learn about nutrition, but it's best to start with the basics. Learn about easy ways you can work more nutrition in your diet. Cut out processed foods, eat food with variety, and cut out sugary drinks.
             A few small changes is enough to make big improvements in your diet</p>
            <a href="https://www.healthline.com/nutrition/healthy-eating-tips">Healthy Eating Tips</a>
          </div>
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>Affordable Fruits & Vegetables</h3>
            <p>A big obstacle for healthy eating for students is cost. However there are lots of fruits and vegetables that are cheap. Check out this
             list to find some ideas of which fruits and vegetables can be included in your diet at the lowest cost. In addition, check out which vegetables and 
            fruits are in season, they'll often be cheaper.</p>
            <a href="https://blog.feedingwestchester.org/blog/the-most-affordable-fruits-and-vegetables">Lowest Cost Fruits and Vegetables</a>
          </div>
          </div>
        )}
    </div>
    </div>

    </div>
  );
};

export default App;
