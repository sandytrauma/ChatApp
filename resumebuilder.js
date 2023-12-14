 // Handle form submission
 document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const education = document.getElementById('education').value;
    const highschool = document.getElementById('highschool').value;
    const metric = document.getElementById('metric').value;
    const profile = document.getElementById('profile').value;
    

  
       // Create the resume HTML
    const resumeHTML = `
      <h2>${name}</h2>
      <h3>${title}</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Location: ${location}</p>
      <!-- Add more sections and fields as needed -->
      <p>Education: ${education}</p>
      <p>Highschool: ${highschool}</p>
      <p>Metric: ${metric}</p>
      
      <div class="resume-container">
        <div class="left_side">
            <div class="profileDescription">
                <div class="imgBox">
                    <img src="/img/self.jpeg">
                </div>
                <h2>${name}</h2>
            </div>
            <div class="contactInfo">
                <h3 class="title">${title}</h3>
                <ul>
                    <li>
                        <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i>
                        </span>
                        <span class="text">${phone}</span>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </span>
                        <span class="text"></span>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i>
                        </span>
                        <span class="text">${location}</span>
                    </li>

                </ul>
            </div>
            <div class="contactInfo Education">
                <p class="title">${education}</p>
                <p class="title">${highschool}</p>
                <p class="title">${metric}</p>
            
                </ul>
            </div>
            <div class="contactInfo Language">
                <h3 class="title">Languages</h3>
                <ul>
                    <li>
                        <span class="text">English</span>
                        <span class="percent">
                            <div id="we">
                            ${english_widthInput}
                            </div>                            
                        </span>
                    </li>
                    <li>
                        <span class="text">Hindi</span>
                        <span class="percent">
                            <div id="wh">
                            ${hindi_widthInput}
                            </div> 
                        </span>
                    </li>
                </ul>
            </div>

        </div>
        <div class="right_side">
            <div class="about">
                <h2 class="title2">Profile</h2>
                <p>
                    ${profile}
                </p>
            </div>
            <div class="about">
                <h2 class="title2">Experience</h2>
                <div class="box">
                    <div class="year_company">
                        <h5>2014 - Present</h5>
                        <h5>Company Name</h5>
                    </div>
                    <div class="text">
                        <h4>Depot Manager</h4>
                        <p>Delhi Integrated Multi Modal Transit System Limited</p>
                    </div>

                </div>
            </div>
            <div class="about Responsibilities">
                <h2 class="title2">Roles and Responsibilities</h2>
                <div class="box">
                    <ul>

                        <li>Maintenance of data base operations</li>
                        <li>Fleet Management</li>
                        <li>Incident/Accident Management</li>
                        <li>Reconcilliation</li>
                        <li>Manager Billing Module</li>
                        <li>Settling Arbitrary events</li>
                        <li>Performance Dashoard Monitoring</li>
                        <li>MIS training</li>

                    </ul>
                </div>
            </div>
            <div class="about skills">

                <h2 class="title2">Professional skills</h2>
                <div class="box">
                    <h4>MS Excel</h4>
                    <div class="percent">
                        <div style="width: 95%;"></div>
                    </div>
                </div>
                <div class="box">
                    <h4>MS Word</h4>
                    <div class="percent">
                        <div style="width: 92%;"></div>
                    </div>
                </div>
                <div class="box">
                    <h4>MS Powerpoint</h4>
                    <div class="percent">
                        <div style="width: 90%;"></div>
                    </div>
                </div>
                <div class="box">
                    <h4>HTML</h4>
                    <div class="percent">
                        <div style="width: 95%;"></div>
                    </div>
                </div>
                <div class="box">
                    <h4>CSS</h4>
                    <div class="percent">
                        <div style="width: 85%;"></div>
                    </div>
                </div>
                <div class="box">
                    <h4>Java Script</h4>
                    <div class="percent">
                        <div style="width: 75%;"></div>
                    </div>
                </div>
            </div>
            <div class="about interest">
                <h2 class="title2">Interest</h2>
                <ul>
                    <li><i class="fa fa-internet-explorer" aria-hidden="true"></i>Internet</li>
                    <li><i class="fa fa-headphones" aria-hidden="true"></i> Music</li>
                    <li><i class="fa fa-book" aria-hidden="true"></i>Reading</li>
                    <li><i class="fa fa-plane" aria-hidden="true"></i> Excursion
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `;

    // Display the resume
    document.getElementById('resume').innerHTML = resumeHTML;
  });

  function changeWidth(){
    const hindi = document.getElementById('hindi_widthInput');
    const english = document.getElementById('english_widthInput');
    const myBoxH = document.getElementById('wh');
    const myBoxE = document.getElementById('we');

    const widthValueH = hindi.value;
    myBoxH.style.width = widthValueH + "px";

    const widthValueE = english.value;
    myBoxE.style.width = widthValueE + "px";

    
}

changeWidth();