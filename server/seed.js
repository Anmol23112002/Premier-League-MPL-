require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Team = require('./models/Team');
const PlayerSet = require('./models/PlayerSet');
const Player = require('./models/Player');

async function seed() {
  await connectDB();

  try {
    // 1. Clear the Database
    await Team.deleteMany({});
    await PlayerSet.deleteMany({});
    await Player.deleteMany({});

    console.log("Cleared old data...");

    // 2. Create Teams
    const teams = await Team.insertMany([
      { name: 'Hilltop Hunters', startingBudget: 12000, remainingBudget: 12000, logoUrl: "/teams/hilltop.png" },
      { name: 'Kiriburu Kings', startingBudget: 12000, remainingBudget: 12000, logoUrl: "/teams/kiriburu.png" },
      { name: 'NewColony Ninjas', startingBudget: 12000, remainingBudget: 12000, logoUrl: "/teams/newcolony.png" },
      { name: 'Murgapara Maharajas', startingBudget: 12000, remainingBudget: 12000, logoUrl: "/teams/murgapara.png" },
      { name: 'Saranda Sultans', startingBudget: 12000, remainingBudget: 12000, logoUrl: "/teams/saranda.png" },
      { name: 'Prospecting Pirates', startingBudget: 12000, remainingBudget: 12000, logoUrl: "/teams/prospecting.png" },
      { name: 'Township Titans', startingBudget: 12000, remainingBudget: 12000, logoUrl: "/teams/township.png" },
      { name: 'Sunset Strikers', startingBudget: 12000, remainingBudget: 12000, logoUrl: "/teams/sunset.png" }
    ]);

    // 3. Create Sets
    const sets = await PlayerSet.insertMany([
      { name: 'Marquee Set', defaultBasePrice: 700, biddingIncrement: 100 },
      { name: 'Batsmen Set', defaultBasePrice: 450, biddingIncrement: 50 },
      { name: 'Bowlers Set', defaultBasePrice: 450, biddingIncrement: 50 },
      { name: 'All-rounders Set', defaultBasePrice: 450, biddingIncrement: 50 },
      { name: 'Unsold Players', defaultBasePrice: 450, biddingIncrement: 50 }
    ]);

    // 4. Find IDs (The Correct Way)
    const marquee = sets.find(s => s.name === 'Marquee Set');
    const bat = sets.find(s => s.name === 'Batsmen Set');
    const bowl = sets.find(s => s.name === 'Bowlers Set');
    const ar = sets.find(s => s.name === 'All-rounders Set');

    const placeholderPhoto = 'https://via.placeholder.com/300x380.png?text=MPL+Player';

    // 5. Insert Players linked to Specific Sets
    await Player.insertMany([
      // Marquee Players
      {
        name: 'Sikandar Pradhan ',
        age: 36,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Sikander.jpg",
        basePrice: 700,
        playerSet: marquee._id   
      },
      {
        name: 'Aditya Raj Singh ',
        age: 17,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Aditya.jpeg",
        basePrice: 700,
        playerSet: marquee._id   
      },
       {
        name: 'Sudhir Nandu Wagh',
        age: 30,
        battingStyle: 'Left-hand Bat',
        //bowlingStyle: 'Right-arm Seam',
        role: 'Batsman',
        photoUrl: "/players/Sudhir.jpg",
        basePrice: 700,
        playerSet: marquee._id   
      },
       {
        name: 'Bikash Mahato',
        age: 37,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Bikash.jpg",
        basePrice: 700,
        playerSet: marquee._id   
      },
       {
        name: 'Vivek Kumar',
        age: 37,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/VIVEK.jpg",
        basePrice: 700,
        playerSet: marquee._id   
      },
       {
        name: 'Dipu Kumar Rajak',
        age: 25,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Dipu.jpg",
        basePrice: 700,
        playerSet: marquee._id   
      },
      {
        name: 'Md Kaif',
        age: 22,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Md_kaif.jpeg",
        basePrice: 700,
        playerSet: marquee._id   
      },
      {
        name: 'Amarjyoti Das ',
        age: 34,
        battingStyle: 'Right-hand Bat',
        //bowlingStyle: 'Right-arm Seam',
        role: 'Batsman',
        photoUrl: "/players/Amar_jyotidas.jpg",
        basePrice: 700,
        playerSet: marquee._id   
      },
      {
        name: 'Pradeep Kumar Jayasawal',
        age: 35,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Pradeep.jpeg",
        basePrice: 700,
        playerSet: marquee._id   
      },
      {
        name: 'Puran Ghosh',
        age: 39,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Puran.jpeg",
        basePrice: 700,
        playerSet: marquee._id   
      },
      {
        name: 'Vicky Singh',
        age: 35,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Spin',
        role: 'All-rounder',
        photoUrl: "/players/Vicky.jpeg",
        basePrice: 700,
        playerSet: marquee._id   
      },
      {
        name: 'Everest Prasad',
        age: 28,
        battingStyle: 'Right-hand Bat',
        //bowlingStyle: 'Right-arm Seam',
        role: 'Batsman',
        photoUrl: "/players/Everest.jpeg",
        basePrice: 700,
        playerSet: marquee._id   
      },
      {
        name: 'Biswajit Samal',
        age: 40,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Biswajit_samal.jpeg",
        basePrice: 700,
        playerSet: marquee._id   
      },
      {
        name: 'Rahul Gupta',
        age: 24,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Rahul_gupta.jpeg",
        basePrice: 700,
        playerSet: marquee._id   
      },
      // Batsmen 
      {
        name: 'Anmol Pandey ',
        age: 23,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Anmol.jpeg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Kanchan Paul ',
        age: 40,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Kanchan.jpeg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Pampaneeya Rakeshkumar Hamirbhai ',
        age: 31,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Pampaneeya.jpeg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Sanu Karua ',
        age: 29,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Sanu.jpeg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Vishal',
        age: 16,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Vishal.jpeg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Randhir Kumar',
        age: 31,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Randhir.jpeg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Tablesh Das',
        age: 24,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Tablesh_das.jpeg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Arun Kumar',
        age: 31,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Arun.jpeg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Lalatendu Hembram',
        age: 36,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Lalatendu.jpeg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Gulshan Kumar',
        age: 31,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Gulshan_kumar.jpeg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Swapna Sagar Naik',
        age: 31,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Swapna.png",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Dheeraj Kumar ',
        age: 33 ,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Dheeraj.jpg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Anish Jaiswal',
        age:26 ,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Anish.jpg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Dewashish Gupta',
        age:36 ,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Dewashish.jpg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Sandeep Kumar Gupta',
        age:29 ,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Sandeep.jpg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Rishikesh Rajak',
        age:31 ,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Rishikesh.jpg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Mrityunjay Kumar ',
        age: 35,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Mrityunjay.jpg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Mrityunjay Samal',
        age: 20,
        battingStyle: 'Left-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Mrityunjay_samal.jpg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Deepak Pan',
        age: 24,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Deepak.jpg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Abhishek Gupta ',
        age: 26,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Abhishek.jpg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Prem Chandra Pan',
        age: 45,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman',
        photoUrl: "/players/Prem_pan.jpg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Ibkar Hossain ',
        age: 24,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman(Wicketkeeper)',
        photoUrl: "/players/Ibkar.jpg",
        basePrice: 450,
        playerSet: bat._id   
      },
      {
        name: 'Sanju Hassa',
        age: 39,
        battingStyle: 'Right-hand Bat',
        role: 'Batsman(Wicketkeeper)',
        photoUrl: "/players/Sanju.jpeg",
        basePrice: 450,
        playerSet: bat._id   
      },
      //All-rounders
      {
        name: 'Ashutosh Kumar',
        age: 28,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Ashutosh.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Saroj Sahoo',
        age: 37,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Saroj.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Bachanraj Nag',
        age: 44,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Bachan.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Ranjeet Kumar Gupta',
        age: 41,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Ranjeet.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Kundan Choudhary',
        age:38 ,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Kundan.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Jhager Bhadur',
        age: 39 ,
        battingStyle: 'Left-hand Bat',
        bowlingStyle: 'Left-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Jhager_badhur.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Praveen Kerketa',
        age:38 ,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Praveen_kerketa.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Deewakar Paswan',
        age: 35,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Deewakar.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Ricky Karua',
        age: 28 ,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Ricky_karua.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Varun',
        age:29 ,
        battingStyle: 'Left-hand Bat',
        bowlingStyle: 'Left-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Ravi.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Abhijeet Kumar',
        age: 32 ,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Abhijeet_kumar.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Vishal Kumar',
        age: 29,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Vishal_kumar.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Rahul Kumar',
        age: 30,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Rahul-kumar.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Damru Dhar Nayak',
        age: 36,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Damru_dharnayak.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Ishan',
        age: 24,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/ISHAN.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Subhrakanti kar',
        age: 34,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Subhrakanti.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'L SENTHILNATHAN',
        age: 44,
        battingStyle: 'Left-hand Bat',
        bowlingStyle: 'Left-arm Spin',
        role: 'All-rounder',
        photoUrl: "/players/senthil_nathan.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Krishna Mondal',
        age: 37,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Krishna.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Manik Chandra Rajak',
        age: 42,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Manik.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Rohit Giri',
        age: 16,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Rohit.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Amit Kmar Chouudhury',
        age: 39,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Amit.png",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Farukh Akhtar ',
        age: 22,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Fahruk.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Kumar Abhishek Naik',
        age: 20,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Spin',
        role: 'All-rounder',
        photoUrl: "/players/Kumar_Abhishek.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Ravi Butun Purty',
        age: 37,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Spin',
        role: 'All-rounder',
        photoUrl: "/players/Ravi_butun.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Sumit Behra',
        age: 27,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Sumit.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Farhan Alam',
        age: 25,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Farhan.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Sandeep Kumar ',
        age: 34,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Sandeep_Kumar.png",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Raj Kishore',
        age: 31,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Rajkishore.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Hritik Mistikar ',
        age: 26,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Hritik.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Sandeep Mishra',
        age: 32,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Sandeep_mishra.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Raj Verma ',
        age: 32,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Raj_verma.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Dwijraj Patra',
        age: 34,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Dwijaraj_patra.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Manoj Kumar Saha',
        age: 26,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Manoj_saha.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
       {
        name: 'Niraj Soy',
        age: 39,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Neeraj_soy.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
       {
        name: 'Vaibhav Yadav ',
        age: 13,
        battingStyle: 'Left-hand Bat',
        bowlingStyle: 'Left-arm Spin',
        role: 'All-rounder',
        photoUrl: "/players/Vaibhav_yadav.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
       {
        name: 'Udbhava Yadav ',
        age: 11,
        battingStyle: 'Left-hand Bat',
        bowlingStyle: 'Left-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Udbhava_yadav.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
       {
        name: 'Kumar Dhirendra',
        age: 38,
        battingStyle: 'Leftt-hand Bat',
        bowlingStyle: 'Left-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Kumar_dhirendra.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
       {
        name: 'Prabhat Kumar Nandkeolyar ',
        age: 42,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Prabhat_nandkeolyar.jpg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Dusmanta Nanda ',
        age: 34,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Dusmanta.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Vikas Mishra ',
        age: 47,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Vikash_mishra.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Susant Karua',
        age: 21,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Susant.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Aniket',
        age: 16,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Aniket.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Anil Kumar',
        age:40 ,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Anil_kumar.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Anirudh Karmakar',
        age: 36,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Anirudh.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Santosh Lohra',
        age: 41,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Santosh.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      {
        name: 'Prabhat Kumar Minz',
        age: 45,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'All-rounder',
        photoUrl: "/players/Prabhat_minz.jpeg",
        basePrice: 450,
        playerSet: ar._id   
      },
      
      // Bowlers
      {
        name: 'Khurshid Mansuri ',
        age: 35,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'Bowler',
        photoUrl: "/players/Khurshid.jpg",
        basePrice: 450,
        playerSet: bowl._id   
      },
      {
        name: 'Deepak Pan ',
        age: 32,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'Bowler',
        photoUrl: "/players/Deepak_Pan.jpeg",
        basePrice: 450,
        playerSet: bowl._id   
      },
      {
        name: 'Abhyash Kumar Yadav ',
        age: 12,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'Bowler',
        photoUrl: "/players/Abhyash_yadav.jpeg",
        basePrice: 450,
        playerSet: bowl._id   
      },
      {
        name: 'Ankit Kumar',
        age: 29,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'Bowler',
        photoUrl: "/players/Ankit.jpeg",
        basePrice: 450,
        playerSet: bowl._id   
      },
      {
        name: 'Chintu Das',
        age: 33,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'Bowler',
        photoUrl: "/players/Chintu.jpeg",
        basePrice: 450,
        playerSet: bowl._id   
      },
      {
        name: 'Bikas Chandra Pan',
        age: 32,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'Bowler',
        photoUrl: "/players/Bikash_pan.jpeg",
        basePrice: 450,
        playerSet: bowl._id   
      },
      {
        name: 'Swapan Baulia',
        age: 39,
        battingStyle: 'Right-hand Bat',
        bowlingStyle: 'Right-arm Seam',
        role: 'Bowler',
        photoUrl: "/players/Swapan_baulia.jpeg",
        basePrice: 450,
        playerSet: bowl._id   
      },
    ]);

    console.log('✅ Seed data inserted successfully!');
  } catch (err) {
    console.error('❌ Seed error:', err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();