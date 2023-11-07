import React, {useState} from 'react';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const fruits = [
    'Watermelon',
    'Bananas',
    'Cantaloupe',
    'Apples',
    'Pineapple',
    'Canned tomatoes',
  ];

  const vegetables = [
    'Potatoes',
    'Dried lentils, pinto beans, black beans, navy beans, Great Northern beans, and red kidney beans',
    'Dried black-eyed peas',
    'Fresh and frozen carrots',
    'Green and red cabbages',
    'Iceberg and romaine lettuces',
    'Dried lima beans',
    'Cucumbers',
    'Canned green beans',
    'Celery',
    'Frozen mixed peas and carrots',
    'Onions',
    'Canned mustard, turnips, and collard greens',
    'Fresh or frozen cauliflower',
    'Radishes',
    'Canned corn',
    'Green peppers',
  ];

  const exercisePoints = [
    "Discover a new route on your bike. You can burn between 450-750 calories per hour of cycling as well as tone muscles and focus your mind.",
    "Walk your dog (or volunteer to take your neighbor’s dog for a walk if you don’t have one). Get outside and let your dog take the lead on helping you get your daily exercise in.",
    "Master a skipping-rope routine. There are plenty of jump rope workout tutorials for beginners online.",
    "Play frisbee at the park. Introduce a bit of healthy competition with your friends and family with a frisbee competition.",
    "Attend your local gym. Change up your workout playlist and hit the gym. Ask instructors how to use those machines you've been avoiding and get your friend to come along for extra motivation.",
    "Go Swimming. Swimming helps improve your flexibility, your balance, builds muscles, and enhances your endurance.",
    "Host a dance party. Get sweaty, burn calories, and move your entire body on the dance floor.",
    "Use the stairs instead of the lifts. A simple way to get extra steps in.",
    "Carry out household chores. On average, you'll burn around 165 calories per hour of general household chores.",
    "Try a new sport - ice skating, fencing, martial arts, ballet, etc. Why not use your Exercise Challenge as an opportunity to try something new? You never know, you may want to keep it up long term.",
    "Go paintballing with your friends. Healthy competition is fun and exciting. Get the adrenaline pumping with a paintballing day with a group of friends.",
    "Master the art of yoga. Increase flexibility and relieve stress with a yoga session. Find your local class today and give it a go.",
    "Join a running club. A great cardio exercise which can be social too. Join your local running club for extra motivation.",
    "Attempt rock-climbing. Rock climbing is both fun and physically demanding. It combines both strength training and cardio in a single workout.",
    "Hike a mountain. Reconnect with the great outdoors while getting your daily exercise in. Inspire your walk with our top hiking routes.",
    "Hula hoop (you’re never too old!). Burn calories and tone muscles by using a weighted hula hoop. You can even do it while watching TV!",
    "Join a team sport. There's no greater motivation than working as a team to achieve a goal. Meet new friends while taking on a sport you enjoy.",
    "Set up a circuit at the park. Turn your park into your own gym. Set up stations for press-ups, sit-ups, burpees, and skipping, and rotate around each one for set times.",
    "Run to work. Save money on your commute while burning calories as you ditch your car, bus, or train for exercise instead.",
    "Try boxercise. Boxercise is an exercise class based on the training concepts boxers use to keep fit. There are plenty of classes across the country for all levels.",
    "Go bowling. According to research, during a three-game series, the average person walks more than half of a mile. A great idea for a weekend activity with your friends.",
    "Orienteering in the countryside. Test your navigational skills and get from point A to B with a group of friends using a map and compass.",
    "Host a sports day. Get your friends and family involved for a sports day. From egg and spoon races to tug of war, this is a fun way to get in your exercise for the day.",
    "Attend a gym class you’ve never done before. Discover all the local gym classes in your area. Why not try a zumba or spin class if you've never tried one before.",
    "Try out a Youtube Pilates tutorial. There are plenty of great tutorials online, and pilates is just one of many ways to increase your flexibility and tone muscles.",
    "Squat, crunch, and lunge in the comfort of your own home. Don't let bad weather stop you from exercising. Set yourself a 30-min challenge of squats, crunches, press-ups, etc.",
    "Introduce weights into your exercise plan. Adding weights will help tone your muscles even more!",
    "Take on your favorite celeb fitness DVD. Use your celeb fitness idol as motivation for your daily exercise!",
    "Teach a friend new exercises. Share your new (or existing) skills with a friend. Work out together and set each other new challenges.",
    "Go spinning. This is a popular exercise class for a reason. Burn calories in this high-intensity cardio class."
  ];

  const exerciseBenefits = [
    'Improved cardiovascular health',
    'Weight management and control',
    'Increased muscle strength and endurance',
    'Better posture and balance',
    'Reduced risk of chronic diseases (e.g., diabetes, heart disease)',
    'Boosted metabolism',
    'Improved mood and mental well-being',
    'Stress reduction and better stress management',
    'Increased energy and stamina',
    'Better sleep quality',
    'Enhanced immune system',
    'Healthy weight loss',
    'Lowered blood pressure',
    'Enhanced cognitive function and memory',
    'Stronger respiratory system',
    'Increased self-confidence and self-esteem',
    'Pain management and relief (for certain conditions)',
    'Better digestion and gut health',
    'Reduced risk of injury',
    'Longer lifespan and improved quality of life',
    'Better focus and concentration',
  ];

  const exerciseTypes = [
    'Aerobic: The core of any fitness program should include some form of continuous movement. Examples include swimming, running, and dancing.',
    'Strength: These exercises help increase muscle power and strength. Examples include resistance training, plyometrics, weightlifting, and sprinting.',
    'Calisthenics: These moves are usually performed without gym equipment using large muscle groups. They’re done at a medium aerobic pace. Examples include lunges, situps, pushups, and pullups.',
    'High-intensity interval training (HIIT): This type of exercise includes repetitions of short bursts of high-intensity exercise followed by low-intensity exercises or rest periods.',
    'Boot camps: These are timed-based, high-intensity circuits that combine aerobic and resistance exercises.',
    'Balance or stability: These exercises are designed to strengthen muscles and improve body coordination. Examples include Pilates, tai chi poses, and core-strengthening exercises.',
    'Flexibility: These types of exercises help muscle recovery, maintain range of motion, and prevent injuries. Examples include yoga or individual muscle-stretch movements.',
  ];
  
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
        <h1>Student Wellness Hub</h1>
      </header>

      <div style={{ display: 'flex' }}>
      <div style={{ height: '100vh', width: '200px', backgroundColor: '#f0f0f0', padding: '10px', borderRight: '1px solid #ccc' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <span style={{ marginBottom: '5px', width: '100%', textAlign: 'left' }}>Exercise</span>
          <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: '20px' }}>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none' }} onClick={() => handleCategoryClick('Benefits of Exercise')}>Benefits of Exercise</button>
            </li>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none' }} onClick={() => handleCategoryClick('Making a Plan')}>Making a Plan</button>
            </li>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none' }} onClick={() => handleCategoryClick('Workout Ideas')}>Workout Ideas</button>
            </li>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none'}} onClick={() => handleCategoryClick('Local Resources')}>Local Resources</button>
            </li>
          </ul>
        </li>
        <li>
          <span style={{ marginBottom: '5px', width: '100%', textAlign: 'left'}}>Meal Prep</span>
          <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: '20px' }}>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none' }} onClick={() => handleCategoryClick('Grocery Tips')}>Grocery Tips</button>
            </li>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none'}} onClick={() => handleCategoryClick('Recipes')}>Recipes</button>
            </li>
          </ul>
          <span style={{ marginBottom: '5px', width: '100%', textAlign: 'left'}}>Nutrition</span>
          <ul style={{ listStyleType: 'none', padding: 0, paddingLeft: '20px' }}>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none' }} onClick={() => handleCategoryClick('Nutrition Basics')}>Nutrition Basics</button>
            </li>
            <li>
              <button style={{ marginBottom: '5px', width: '100%', textAlign: 'left', border: 'none'}} onClick={() => handleCategoryClick('Realistic Goals')}>Realistic Goals</button>
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
          <div>
          <h3>Workout Ideas</h3>
          <p>Sometimes students don't have time to go to the gym but still want to find time to exercise. Thankfully there's plenty of ways to workout that 
          you can do from anywhere with no equipment. Here's several ideas of how you can get exercise in as a student. Choose a couple to try out and feel the benefits of a good workout routine!</p>
          <ul>
          {exercisePoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        </div>
        )}

        {selectedCategory === 'Making a Plan' && (
          <div>
          <h3>Making a Plan</h3>
          <p>The first step in making a workout routine is understanding what the different areas of exercise are.</p>
          <ul>
            {exerciseTypes.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
          <p>There are some core steps you should follow when starting a new workout:</p>
          <h4>1.Check Your Health</h4>
          <p>Always make sure to regularly check in with health providers to make sure you're in good shape to exercise.</p>
          <h4>2.Make a plan and set realistic goals</h4>
          <p>Once you decide to start exercising regularly, try to create a plan that includes attainable steps and goals. One way to do this is to start with a plan of easy steps to follow. Then you can continue building on it as your fitness level improves.
          For example, if your goal is to finish a 5-kilometer run, you can start by building a plan that includes shorter runs. Once you can finish those short runs, increase the distance until you can run the whole 5 kilometers in one session.
           Starting with small achievable goals will increase your chances of success and keep you motivated every step of the way.</p>
           <h4>3.Make it a Habit</h4>
           <p>making a schedule or exercising at the same time every day are good ways to sustain your routine and make it last. 
           For example, you can make exercise a habit by planning to work out right after work every day or first thing in the morning. 
           It’s important to choose a time that works best for you.</p>
           <div>
      <h4>Sample Weekly Exercise Schedule</h4>
      <ul>
        <li><strong>Monday:</strong> 40-minute moderate-pace jog or brisk walk.</li>
        <li><strong>Tuesday:</strong> Rest day.</li>
        <li>
          <strong>Wednesday:</strong> Walk briskly for 10 minutes. Then, complete the following circuits, resting 1 minute after each set but not between exercises. Stretch afterward.
          <ul>
            <li><em>Circuit #1:</em> 3 sets alternating 10 lunges for each leg, 10 pushups, 10 situps</li>
            <li><em>Circuit #2:</em> 3 sets alternating 10 chair-dips, 10 jumping jacks, 10 air squats</li>
          </ul>
        </li>
        <li><strong>Thursday:</strong> Rest day.</li>
        <li><strong>Friday:</strong> 30-minute bike ride or moderate-pace jog.</li>
        <li><strong>Saturday:</strong> Rest day.</li>
        <li><strong>Sunday:</strong> Run, jog, or take a long walk for 40 minutes.</li>
      </ul>
    </div>
          </div>
        )}

        {selectedCategory === 'Benefits of Exercise' && (
          <div>
          <h3>Why Should I Exercise?</h3>
          <p>Before we make a plan, it's good to know about why physical exercise is so important. There are multiple benefits proven to go along with regular exercise, such as:</p>
          <ul>
            {exerciseBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <p>Regularly exercising is a great asset for students as it can help release stress and improve focus in classes. Finding ways that work
           for you to regularly practice physical activity will help you in several areas of your life. Knowing that, check out the other tabs here to 
           get ideas for how to exercise and to learn about local resources to help.</p>
          </div>
        )}

        {selectedCategory === 'Grocery Tips' && (
          <div>
            <h3>Grocery Shopping Tips</h3>
            <p>Money is often a concern for students when it comes to eating better. However, there are several things students can do to eat better
            at minimal cost. Eating fruits and vegetables that are in season can cut down on costs. Buying in bulk can also frequently save money. Buying larger
             amounts and learning to store it correctly is a great skill for cheaper grocery shopping. There are also several fruits and vegetables that 
             are the same cost or cheaper as your favorite unhealthy snacks. If you'd like to eat healthy
             but are worried about the cost, here's the cheapest fruits and vegetables that you can easily and inexpensively add onto a meal.</p>

             <p>All of these fruits cost under 50 cents a cup:</p>
          <ul>
            {fruits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

            <p>All of these vegetables cost under 50 cents a cup:</p>
          <ul>
            {vegetables.map((vegetable, index) => (
              <li key={index}>{vegetable}</li>
            ))}
          </ul>
          </div>
        )}

        {selectedCategory === 'Recipes' && (
          <div>
          <h3>Recipes</h3>
          <p>Food doesn't have to complicated or unenjoyable to be nutritous. You can make a great meal with your choice of meat and vegetables. 
          Here's some easy, nutritious recipe ideas to get you started. All of these have ingredients that could easily be swapped for something else.</p>

          <h5>Chicken Recipes</h5>
          <ul>
          {/* <img src="https://hips.hearstapps.com/hmg-prod/images/goddess-bowls-lead-6421ee1be1d2f.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=980:*" width={250} height={250}/> */}
          <li><a href="https://www.delish.com/cooking/recipe-ideas/recipes/a54905/goddess-bowls-recipe/">Goddess Bowls</a></li>
          <li>
          {/* <img src="https://hips.hearstapps.com/hmg-prod/images/copycat-chipotle-burrito-bowl-secondary-641dd68c6847f.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=980:*" width={250} height={250}/> */}
          <a href="https://www.delish.com/cooking/a43496223/copycat-chipotle-burrito-bowl-recipe/">Chipotle Chicken Burrito Bowl</a>
          </li>
          <li>
          {/* <img src="https://www.eatwell101.com/wp-content/uploads/2021/07/Healthy-Chicken-with-Vegetable-Skillet-1.jpg" width={250} height={250}/> */}
          <a href="https://www.eatwell101.com/healthy-chicken-vegetable-recipe">One Pot Chicken and Vegetables Skillet</a>
          </li>
          {/* <img src="https://hips.hearstapps.com/hmg-prod/images/delish-buddha-bowl-vertical-1535377547.png?crop=0.846xw:0.847xh;0.105xw,0.136xh&resize=980:*" width={250} height={250}/> */}
          <li><a href="https://www.delish.com/cooking/menus/recipes/a50768/buddha-bowls-recipe/">Buddha Bowl</a></li>
          </ul>
          <h5>Seafood Recipes</h5>
          <ul>
          <li>
          {/* <img src="https://www.eatwell101.com/wp-content/uploads/2022/02/Sheet-Pan-Shrimp-Fajitas-recipe.jpg" width={250} height={250}/> */}
          <a href="https://www.eatwell101.com/sheet-pan-shrimp-fajitas-recipe">Sheet Pan Shrimp Fajitas</a>
          </li>
          <li>
          {/* <img src="https://hips.hearstapps.com/hmg-prod/images/fish-taco-bowls-vertical-6421f8aa872d0.jpg?crop=0.8329861111111111xw:1xh;center,top&resize=980:*" width={250} height={250}/> */}
          <a href="https://www.delish.com/cooking/recipe-ideas/a43389828/fish-taco-bowls-recipe/">Fish Taco Bowl</a>
          </li>
          <li>
            <a href="https://www.eatwell101.com/creamy-garlic-tuscan-salmon-recipe">Garlic Tuscan Salmon</a>
          </li>
          </ul>
          <h5>Vegetarian Recipes</h5>
          <ul>
          <li>
            <a href="https://www.eatwell101.com/parmesan-chopped-salad-recipe">Parmesan Salad</a>
          </li>
          <li>
            <a href="https://www.delish.com/cooking/recipe-ideas/a26090091/tofu-stir-fry-recipe/">Tofu Stir Fry</a>
          </li>
          </ul>
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
          </div>
        )}
    </div>
    </div>

    </div>
  );
};

export default App;
