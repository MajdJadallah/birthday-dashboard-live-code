let profiles = [
    {
      username: "eva",
      gender: "female",
      age: 24,
      birthday: "06 February 1990",
    },
    {
      username: "Mohammad",
      gender: "Male",
      age: 24,
      birthday: "07 May 1990",
    },
    {
      username: "Majd",
      gender: "Female",
      age: 24,
      birthday: "07 May 1990",
    },
    {
      username: "Rawan",
      gender: "Female",
      age: 24,
      birthday: "07 May 1990",
    },
    {
        username: "Omar",
        gender: "Male",
        age: 24,
        birthday: "07 May 1990",
      },
      {
        username: "Ayar",
        gender: "Female",
        age: 24,
        birthday: "08 May 1990",
      },
        
  ];
  
  let profilesContainer = document.getElementById("birthday__profile-container");
  let clearButton = document.querySelector(".btn__clear");
  let currentDate = new Date();
  let month = currentDate.toLocaleString("default", { month: "long" });
  let day = currentDate.getDate();
  
  // Set the font family for the entire page
  document.body.style.fontFamily = "Arial, sans-serif";
  
  // Center the elements
  document.querySelector(".birthday__card").style.display = "flex";
  document.querySelector(".birthday__card").style.flexDirection = "column";
  document.querySelector(".birthday__card").style.justifyContent = "center";
  profilesContainer.style.display = "flex";
  profilesContainer.style.flexDirection = "column";
  profilesContainer.style.justifyContent = "center";
  profilesContainer.style.alignItems = "center";
  
  // Function to display the correct gender image
  function displayGenderImage(gender) {
    let imgSrc = gender === "male" ? "assets/img/male.png" : "assets/img/female.png";
    return `<img src="${imgSrc}" alt="${gender}" />`;
  }
  
  // Function to calculate age
  function calculateAge(birthday) {
    let dob = new Date(birthday);
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  
  for (let profile of profiles) {
    let birthday = profile.birthday.split(" ");
    if (birthday[1].toLowerCase() === month.toLowerCase() && Number(birthday[0]) === day) {
      profilesContainer.innerHTML += ` <div class="birthday__profile">
          ${displayGenderImage(profile.gender.toLowerCase())}
          <div class="birthday__info">
              <p>${profile.username}</p>
              <p> ${calculateAge(profile.birthday)}</p>
          </div>
      </div>`;
    }
  }
  
  // Make the clear button functional
  clearButton.addEventListener("click", function () {
    profilesContainer.innerHTML = "";
  });
    //Way 2 : The hard way
        //  let profileCard =  document.createElement('div')
        // profileCard.className='birthday__profile';
        // profilesContainer.appendChild(profileCard)
        // let profileImg = document.createElement('img')
        // profileImg.setAttribute('src','assets/img/female.png')
        // profileCard.appendChild(profileImg);
        // let birthdayInfo = document.createElement('div')
        // birthdayInfo.className = 'birthday__info'
        // profileCard.appendChild(birthdayInfo)
        // let username = document.createElement('p')
        //username.appendChild(document.createTextNode(profile.username))
        //birthdayInfo.appendChild(username)
        //let age = document.createElement('p')
        //age.appendChild(document.createTextNode(profile.age))
        //birthdayInfo.appendChild(age)
        //console.log(profile)