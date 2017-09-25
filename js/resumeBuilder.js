var work = {
    "jobs": [
        {
            "employer": "University of Washington",
            "title": "Social Media Coordinator",
            "location": "Seattle, Washington",
            "dates": "June 2016–June 2017",
            "description": "Managed UW Division of Student Life social media accounts. Oversaw and collaborated with team of 14 to increase audience engagement, craft narratives, and create strategic development plans."
        },
        {
            "employer": "eNotes",
            "title": "Social Media Intern",
            "location": "Seattle, Washington",
            "dates": "June 2016–September 2016",
            "description": "Copywriting and social media management. Utilized photography skills and practiced visual design to create brand assets."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Seattle Book Tour",
            "dates": "Summer 2016",
            "description": "A print format map created for eNotes Seattle as part of my internship. Details the location of 14 indie bookstores around Seattle, Washington.",
            "images": ["images/booktour1.jpg", "images/booktour2.jpg"]
        },
        {
            "title": "Empyrean Teahouse",
            "dates": "Spring 2016",
            "description": "Logo and branding ideation for an upscale teahouse.",
            "images": ["images/empyreanideas.jpg", "images/empyrean.jpg"]
        }
    ]
};

var bio = {
    "name": "Mara Childs",
    "role": "Interaction Designer",
    "welcomeMessage": "Hi there!",
    "biopic": "images/mara.jpg",
    "contacts": {
        "mobile": "+1 (206) 518-1873",
        "email": "marachilds@gmail.com",
        "github": "marachilds",
        "twitter": "themissmara",
        "location": "Glasgow, Scotland, UK"
    },
    "skills": ["HTML", "CSS", "JavaScript", "R"]
};

var education = {
    "schools": [
        {
            "name": "Glasgow School of Art",
            "location": "Glasgow, Scotland",
            "degree": "Honours Bachelor of Art",
            "dates": "September 2017–June 2019",
            "url": "www.gsa.ac.uk",
            "majors": ["Interaction Design"]
        },
        {
            "name": "University of Washington",
            "location": "Seattle, Washington",
            "degree": "Transferred",
            "dates": "September 2015–June 2017",
            "url": "uw.edu",
            "majors":["Interaction Design"]
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Development",
            "school": "Udacity",
            "dates": "June 2017–December 2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};


// Define function to display everything in bio object
bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    // Display bio skills if length is greater than 0
    if(bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        for(i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);}

    }

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts,#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email); $("#topContacts,#footerContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts,#footerContacts").append(formattedTwitter);

    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github); $("#topContacts,#footerContacts").append(formattedGit);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedLocation);
};

bio.display();

// Define function to display everything in work object
work.display = function() {
    for(i = 0; i < work.jobs.length; i++) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);

    }
};

work.display();

// Define function to display everything in projects object
projects.display = function() {
    for(i = 0; i < projects.projects.length; i++) {

    $("#projects").append(HTMLprojectStart);

    var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(projectTitle);

    var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(projectDates);

    var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(projectDescription);

    if (projects.projects[i].images.length > 0) {
        for(j = 0; j < projects.projects[i].images.length; j++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedImage);}
        }
    }
};

projects.display();

// Define function to display everything in education object
education.display = function() {
   for(i = 0; i < education.schools.length; i++) {

       $("#education").append(HTMLschoolStart);

       var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
       var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
       $(".education-entry:last").append(schoolName + schoolDegree);

       var schoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
       $(".education-entry:last").append(schoolDate);

       var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
       $(".education-entry:last").append(schoolLocation);

       if (education.schools[i].majors.length > 0) {
        for(j = 0; j < education.schools[i].majors.length; j++) {
            var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
            $(".education-entry:last").append(schoolMajor);}
        };
       
   }
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

    for(i = 0; i < education.onlineCourses.length; i++) {
        
        var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(onlineTitle + onlineSchool);

        var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(onlineDates);

        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedURL);
        
    }
};

education.display();

// Add Google Maps
$("#mapDiv").append(googleMap);

// Internationalize name function
function inName(name) {

    var finalName = name;

    var d = name.trim().split(" ");
    var out = d[0][0].toUpperCase();
    out += d[0].substr(1).toLowerCase() + " ";
    out += d[1].toUpperCase();
    finalName = out;

    return finalName;
}

$("#main").append(internationalizeButton);