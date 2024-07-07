

let strMessage ="";

const arrOfPeopleAdjectives = ["Accomplished", "Adaptable", "Adept", "Adventurous", "Affable", "Affectionate", 
"Agreeable", "Alluring", "Amazing", "Ambitious", "Amiable", "Amicable", "Ample", "Amusing", "Approachable", 
"Articulate", "Awesome", "Blithesome", "Brave", "Bright", "Brilliant", "Broad-minded", "Calm", "Capable", 
"Captivating", "Careful", "Charismatic", "Charming", "Chatty", "Cheerful", "Communicative", "Compassionate", 
"Competitive", "Confident", "Conscientious", "Considerate", "Convivial", "Courageous", "Courteous", "Creative", 
"Dazzling", "Decisive", "Dependable", "Determined", "Devoted", "Diligent", "Diplomatic", "Discreet", "Dynamic", 
"Easy-going", "Educated", "Efficient", "Elegant", "Emotional", "Enchanting", "Energetic", "Enlightened", "Engaging", 
"Enthusiastic", "Excellent", "Expert", "Exuberant", "Fabulous", "Fair-minded", "Faithful", "Fantastic", "Fearless", 
"Flexible", "Focused", "Forceful", "Frank", "Friendly", "Funny", "Generous", "Gentle", "Giving", "Gleaming", "Glimmering", 
"Glistening", "Glittering", "Glowing", "Good", "Gorgeous", "Gregarious", "Hard-working", "Helpful", "Hilarious", "Honest", 
"Humorous", "Imaginative", "Impartial", "Incredible", "Independent", "Inquisitive", "Insightful", "Intellectual", 
"Intelligent", "Intuitive", "Inventive", "Kind", "Knowledgeable", "Kooky", "Laid-back", "Likable", "Lovely", "Loving", 
"Loyal", "Lustrous", "Magnificent", "Marvelous", "Mirthful", "Modest", "Neat", "Nice", "Observant", "Open-minded", 
"Optimistic", "Organized", "Outstanding", "Passionate", "Patient", "Perfect", "Persistent", "Personable", 
"Philosophical", "Pioneering", "Placid", "Plucky", "Polite", "Powerful", "Practical", "Pro-active", "Productive", 
"Proficient", "Propitious", "Qualified", "Quick-witted", "Quiet", "Rational", "Ravishing", "Relaxed", "Reliable", 
"Remarkable", "Reserved", "Resourceful", "Responsible", "Romantic", "Rousing", "Self-confident", "Self-disciplined", 
"Sensible", "Sensitive", "Sincere", "Sleek", "Sociable", "Spectacular", "Splendid", "Stellar", "Straightforward", 
"Stunning", "Stupendous", "Super", "Sympathetic", "Technological", "Thoughtful", "Tidy", "Tough", "Trustworthy", 
"Twinkling", "Unassuming", "Understanding", "Unique", "Upbeat", "Versatile", "Vibrant", "Vivacious", "Vivid", 
"Warm-hearted", "Willing", "Witty", "Wondrous"];

const arrOfPplacesAdjectives = ["Beautiful", 
"Blazing", "Boundless", "Bountiful", "Breath-taking", "Bright", "Bustling", "Calm", "Colossal", "Colorful", 
"Cosmopolitan", "Dramatic", "Dusky", "Fairy-tale-like", "Far-flung", "Fascinating", "Favorable", "Fertile", 
"Fresh", "Harmonious", "Historic", "Homey", "Immaculate", "Immense", "Lively", "Lush", "Luxurious", 
"Magical", "Magnificent", "Majestic", "Marvelous", "Massive", "Meandering", "Monumental", "Mountainous", 
"Mysterious", "Mystical", "Nostalgic", "Palatial", "Pastoral", "Peaceful", "Picturesque", "Pleasant", 
"Prosperous", "Remarkable", "Rural", "Sandy", "Sensational", "Serene", "Shiny", "Spacious", "Stunning", 
"Sun-drenched", "Superb", "Terrific", "Towering", "Tranquil", "Unspoiled/Unspoilt", "Vast", "Vibrant"];


const messageGenerator = () => {
    
 // Choosing a random string out of the array   
 const randomPeopleIndex = Math.floor(Math.random() * arrOfPeopleAdjectives.length);
 const randomPeopleElement = arrOfPeopleAdjectives[randomPeopleIndex];

 const randomPlaceIndex = Math.floor(Math.random() * arrOfPplacesAdjectives.length);
 const randomPlaceElement = arrOfPplacesAdjectives[randomPlaceIndex];

 strMessage = "Can you image yourself being " + randomPeopleElement + " in a " + randomPlaceElement + " environment or place ?";
 return strMessage;
}

console.log(messageGenerator());