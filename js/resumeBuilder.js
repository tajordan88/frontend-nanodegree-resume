/*
$("#main").append(["Jordan Ta"]);

var awesomeThoughts = "I am Jordan and I am AWESOME!";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append([funThoughts]);


var formattedName = HTMLheaderName.replace("%data%", "Jordan Ta");

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);



var sample = ["one", "two", "three"];

console.log(sample.length);

*/




/* SKILLS */
var skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap"
]




/* BIO */
var bio = {
    "name" : "Jordan Ta",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "(661) 932-6590",
        "email" : "tajordan88@gmail.com",
        "github" : "https://github.com/tajordan88",
        "blog" : "www.jordantadesigns.com",
        "location" : "Riverside, CA"
    },
    "welcomeMessage" : "Welcome to Jordan Ta's Designs!",
    "skills" : skills,
    "biopic" : "images/jordan.jpg",
    "display" : "function"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactInfo = HTMLcontactGeneric.replace("%contact%", bio.name).replace("%data%", bio.role);

var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedHTMLblog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedHTMLwelcomeMsg);

$("#topContacts").append(formattedHTMLmobile);
$("#topContacts").append(formattedHTMLemail);
$("#topContacts").append(formattedHTMLgithub);
$("#topContacts").append(formattedHTMLblog);
$("#topContacts").append(formattedHTMLlocation);
$("#header").append(formattedHTMLbioPic);



/* SKILLS */
//$("#header").append(HTMLskillsStart);
//$("#header").append(formattedHTMLskills);

var formattedHTMLskills0 = HTMLskills.replace("%data%", skills[0]);
var formattedHTMLskills1 = HTMLskills.replace("%data%", skills[1]);
var formattedHTMLskills2 = HTMLskills.replace("%data%", skills[2]);
var formattedHTMLskills3 = HTMLskills.replace("%data%", skills[3]);

if (bio.skills != "") {
    $("#header").append(HTMLskillsStart);
    $("#skills-h3").append(formattedHTMLskills0);
    $("#skills-h3").append(formattedHTMLskills1);
    $("#skills-h3").append(formattedHTMLskills2);
    $("#skills-h3").append(formattedHTMLskills3);
}



/* EDUCATION */
var education = {
    "schools" : {
        "name" : "University of California Riverside",
        "location" : "Riverside, CA",
        "degree" : "Bachelor of Science",
        "major" : "Sociology",
        "dates" : "2009-2013",
        "url" : "http://www.ucr.edu/"
    },
    "onlineCourses" : {
        "title" : "Front-End Nanodegree",
        "school" : "Udacity",
        "dates" : "2016-present ",
        "url" : "https://www.udacity.com/"
    },
    "display" : "function"
}


var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools["name"]);
var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools["degree"]);
var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools["dates"]);
var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools["location"]);
var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools["major"]);

var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses["title"]);
var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses["school"]);
var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses["dates"]);
var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses["url"]);


$("#education").append(HTMLschoolStart);
$("#education").append(formattedHTMLschoolName);
$("#education").append(formattedHTMLschoolDegree);
$("#education").append(formattedHTMLschoolDates);
$("#education").append(formattedHTMLschoolLocation);
$("#education").append(formattedHTMLschoolMajor);

$("#education").append(HTMLonlineClasses);
$("#education").append(formattedHTMLonlineTitle);
$("#education").append(formattedHTMLonlineSchool);
$("#education").append(formattedHTMLonlineDates);
$("#education").append(formattedHTMLonlineURL);



/* WORK */
var work = {}
work.employer = "Creedenz";
work.title = "Programmer Analyst";
work.years = "2015-2016";
work.location = "Riverside";
work.description = "Developed front and back end for Creedenz CXM CRM software."


var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.title);
var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.years);
var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.location);
var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.description);


$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedHTMLworkEmployer);
$("#workExperience").append(formattedHTMLworkTitle);
$("#workExperience").append(formattedHTMLworkDates);
$("#workExperience").append(formattedHTMLworkLocation);
$("#workExperience").append(formattedHTMLworkDescription);



/* PROJECTS */
var projects = {
    "title" : "Cheap Lighting and Stage Designs",
    "dates" : "2016",
    "description" : "This website contains all the basics of beginning stage and lighting, providing examples of cheap and affordable options for lighting and stage design.",
    "img" : ""
}


var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects.title);
var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", projects.dates);
var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.description);
//var formattedHTMLprojectImage = HTMLprojectImage.replace("%data", projects.img);


$("#projects").append(HTMLprojectStart);
$("#projects").append(formattedHTMLprojectTitle);
$("#projects").append(formattedHTMLprojectDates);
$("#projects").append(formattedHTMLprojectDescription);
//$("#projects").append(formattedHTMLprojectImage);









for (var i=0; i<9; i++) {
    console.log(i);
}



