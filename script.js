// 1. Colleague Database
const colleaguesData = {
    ambika: {
        name: "Ambika",
        role: "The QA Superhero",
        message: "Happy Birthday! Hope you have an amazing day filled with joy. Keep catching those bugs and saving the project like the hero you are!",
        // Your 1st link
        lottieUrl: "https://lottie.host/857353ab-06ed-4a56-8d83-4270b77bf2ec/M5tJaxjEoB.lottie" 
    },
    kumar: {
        name: "Kumar Kishan",
        role: "Regression Man",
        message: "Happy Birthday, Regression Man! May your special day be as flawless as a 100% green test execution. Take a well-deserved break from breaking the build today, but never stop keeping the team on our toes with those back-to-back bug logs. Enjoy!",
        // Your 2nd link
        lottieUrl: "https://lottie.host/884783c6-5a17-410f-9b03-40c071c02877/QWxO6gILrF.lottie" 
    },
    colleague3: { // Change 'colleague3' to their actual first name (lowercase)
        name: "Enter Name Here",
        role: "Enter Role Here",
        message: "Type their special birthday message here!",
        // Your 3rd link
        lottieUrl: "https://lottie.host/bddc1470-3e4e-4ead-ba88-3e49065242a9/6mhc7b2MOH.lottie"
    },
    colleague4: { // Change 'colleague4' to their actual first name (lowercase)
        name: "Enter Name Here",
        role: "Enter Role Here",
        message: "Type their special birthday message here!",
        // Your 4th link
        lottieUrl: "https://lottie.host/f1a6cd3d-a4c3-419f-b760-f6d1a13640a6/ylAfPJUezT.lottie"
    },
    kirti: {
        name: "Kirti",
        role: "The Leader & Chief of Chill",
        message: "Happy Birthday, Kirti! Thank you for being the kind of leader who keeps the pressure low, the laughs high, and always has our backs when things get stressful. We promise not to take any of your pranks personally! Hope your birthday is exactly like the environment you create for our team: completely chill, totally fun, and absolutely amazing.",
        // Find a fun .lottie link for her and paste it here!
        lottieUrl: "https://lottie.host/884783c6-5a17-410f-9b03-40c071c02877/QWxO6gILrF.lottie" 
    },
    default: {
        name: "Teammate",
        role: "The Office Legend",
        message: "Wishing you a fantastic birthday and a year filled with great code and no merge conflicts!",
        lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_u4yrau.json"
    }
};

// 2. Get the colleague name from the URL (e.g., ?colleague=kumar)
const urlParams = new URLSearchParams(window.location.search);
const colleagueKey = urlParams.get('colleague') || 'default';

// 3. Fetch their data
const person = colleaguesData[colleagueKey.toLowerCase()] || colleaguesData['default'];

// 4. Inject Data into HTML
document.getElementById('name-text').innerText = person.name;
document.getElementById('role-text').innerText = person.role;
document.getElementById('message-text').innerText = person.message;

// Inject the Lottie Player dynamically
// Inject the exact dotLottie-wc Player dynamically with forced sizing
// Grab the player from the HTML and simply update its source link
const mascotPlayer = document.getElementById('mascot-player');
mascotPlayer.setAttribute('src', person.lottieUrl);
// 5. The Gift Box Logic
const giftScreen = document.getElementById('gift-screen');
const mainCard = document.getElementById('main-card');

// Wait for the user to click the gift
// Wait for the user to click the gift
giftScreen.addEventListener('click', () => {
    
    // Hide the gift box
    giftScreen.style.display = 'none';
    
    // Show the birthday card container
    mainCard.style.display = 'block';

    // 🔊 PLAY THE SOUND EFFECT! 🔊
    // Make sure the file name matches exactly what you named your MP3
    const partySound = new Audio('surprise.mp3');
    partySound.play();

    // 🎉 FIRE THE CONFETTI! 🎉
    confetti({
        particleCount: 150, // Number of confetti pieces
        spread: 80,         // How wide they burst
        origin: { y: 0.6 }, // Starts the burst slightly below the center
        colors: ['#ffb6ff', '#ffd700', '#ffffff', '#ff6b6b'] // Matches your theme
    });

    // Trigger the GSAP Animations for the main card container
    gsap.fromTo(mainCard, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate the text elements inside the card to flow in one by one
    gsap.from(".text-content > *, .character-box", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2, 
        ease: "power2.out",
        delay: 0.2
    });
});
