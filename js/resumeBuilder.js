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
    "schools" : [
        {
            "name" : "Udacity",
            "location" : "Online",
            "degree" : "Nanodegree",
            "majors" : [
                "Front-End Web Developer"
                ],
            "dates" : "Feb 2016 - present",
            "url" : "https://www.udacity.com/"
        },
        {
            "name" : "University of California Riverside",
            "location" : "Riverside, CA",
            "degree" : "Bachelor of Science",
            "majors" : [
                    "Sociology"
                ],
            "dates" : "2009 - 2013",
            "url" : "http://www.ucr.edu/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Responsive Web Design",
            "school" : "Udacity",
            "dates" : "Feb 2016 - Mar 2016",
            "url" : "https://www.udacity.com/"
        },
        {
            "title" : "Github",
            "school" : "Udacity",
            "dates" : "Feb 2016 - Mar 2016",
            "url" : "https://www.udacity.com/"
        }
    ],
    "display" : "function"
}


education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolNameDegree = formattedHTMLschoolName + formattedHTMLschoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);

        var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedHTMLschoolDates);

        var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedHTMLschoolLocation);

        if (education.schools[school].majors.length > 0) {
            for (major in education.schools[school].majors) {
                var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedHTMLschoolMajor);
            }
        }


    }
}

education.display();

var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses["title"]);
var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses["school"]);
var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses["dates"]);
var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses["url"]);


$("#education").append(HTMLonlineClasses);
$("#education").append(formattedHTMLonlineTitle);
$("#education").append(formattedHTMLonlineSchool);
$("#education").append(formattedHTMLonlineDates);
$("#education").append(formattedHTMLonlineURL);



/* WORK */
var work = {
    "jobs" : [
        {
            "employer" : "Creedenz Solutions",
            "title" : "Programmer Analyst",
            "location" : "Riverside, CA",
            "dates" : "February 2015 - June 2016",
            "description" : "Developed custom CRM (Customer Relationship Management) systems for clients using MySQL and Javascript."
        },
        {
            "employer" : "Database Marketing Group",
            "title" : "Dynamic Media Developer",
            "location" : "Irvine, CA",
            "dates" : "April 2014 - December 2014",
            "description" : "Customized and quality assured HTML and CSS for emails, testing cross-email client/cross-browser/cross-device quality of responsive design for large clients such as BudgetBlinds, and internally for McDonalds, and Subway."
        },
        {
            "employer" : "Acts2Fellowship",
            "title" : "Assistant Web Developer (Internship Completed)",
            "location" : "Riverside, CA",
            "dates" : "March 2013 - April 2014",
            "description" : "Developed a responsive splash page using HTML, CSS, PHP, and Twitter Bootstrap."
        },
        {
            "employer" : "Contego Spa Designs",
            "title" : "Web Developer/Marketing Assistant (Contract Position Completed)",
            "location" : "Westminster, CA",
            "dates" : "August 2013 - January 2014",
            "description" : "Designed and built front page banners, uploading using Wordpress CMS."
        }
        ],
    "display" : "function"
}

var displayWork = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedHTMLworkEmployer + formattedHTMLworkTitle;
        var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedHTMLworkDates);
        $(".work-entry:last").append(formattedHTMLworkLocation);
        $(".work-entry:last").append(formattedHTMLworkDescription);
    }
}

displayWork();



/* PROJECTS */
var projects = {
    "projects" : [
        {
            "title" : "Jordan Ta Designs",
            "dates" : "2013 - 2016",
            "description" : "This website contains a sampling of projects I've built or worked on in the past.",
            "images" : [
                "images/JordanPortfolio380x250.jpg",
                "images/JordanPortfolio2380x250.jpg"
                ]
        },
        {
            "title" : "Cheap Lighting and Stage Designs",
            "dates" : "2016 - present",
            "description" : "This website contains all the basics of beginning stage and lighting, providing examples of cheap and affordable options for lighting and stage design.",
            "images" : [
                "images/Cheap_Lighting_And_Stage_Designs380x250.jpg"
                ]
        }
    ],
    "display" : "function"
}


projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedHTMLprojectTitle);

        var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedHTMLprojectDates);

        var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedHTMLprojectDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedHTMLprojectImage);
            }
        }
    }
}

projects.display();




/* MAP */
$("#mapDiv").append(googleMap);





/* OTHER */
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});






$("#main").append(internationalizeButton);

var inName = function (name) {
    var intName = name;
    var intNameArray = name.split(" ");
    var LName = intNameArray[1].toUpperCase();
    var intName = intNameArray[0] + " " + LName;
    return intName;
}




/*
for (var i=0; i<9; i++) {
    console.log(i);
}
*/




