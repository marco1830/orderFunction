const personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];



// const seluruhPersonnel = personnel.map(a => a.personnel) 
// document.write(`<br> ${seluruhPersonnel}`)

// document.write(`${forceUserTrue}`)
// document.write(forceUserFalse);


const forceUserTrue = personnel.filter(a => a.isForceUser ===true )
const forceUserFalse = personnel.filter(a => a.isForceUser ===false)
const jumlahForce = forceUserTrue.map(a => a.pilotingScore+a.shootingScore)

const hasilForce = jumlahForce.reduce((a,b) => a+b)

personnel.forEach((p)=>{
  document.write(
    `<br>ID: ${p.id} <br> 
    Name: ${p.name} <br>
    pilotingScore: ${p.pilotingScore} <br> 
    shootingScore: ${p.shootingScore}<br>
    isforceUser: ${p.isForceUser}<br>`)
  }) 
  document.write(`<br><hr> hasil score true: <br> ${jumlahForce}<br>`)
  document.write(`<br>total score: <br> ${hasilForce} <br><br>`);
  // document.write(`${forceUserTrue}`);
  