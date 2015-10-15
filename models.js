/**
 * Created by jacksonstone1 on 6/15/15.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var YearSchema = new Schema({
        poi: [{
            title: String,
            text: [String],
            additions: [String]
        }],
        year: String,
        langues: [String]
    });

    var YearModel = mongoose.model('Year', YearSchema);
exports.YearModel = mongoose.model('Year', YearSchema);

var Year2012 = new YearModel({
        poi: [
            {
                title: 'Full Ride to College',
                text: ["I was awarded around $70,000 in scholarships from a number of sources to attend <a href=\"https://www.utc.edu/\" target=\"_blank\">UTC</a>\.",
                    "I'll be graduating in Spring 2016 with a degree in Computer Science.", '(I currently have a GPA of <a href=\"/images/transcript.pdf\" target=\"_blank\"><b>3.9</b></a>)'],
                additions: ['<a href=\"http://blog.utc.edu/news/2014/10/students-awarded-scholarships-chattanooga-technology-council/\" target=\"_blank\"><img class=\'resource\' src=\'images/scholarship.png\'></a>'],
            },
        ],
        year: 2012,
        langues: ['Java',],


    });

var Year2014 = new YearModel({
        poi: [
            {
                title: "Worked for ORNL",
                text: ['Spring of 2014 I was a student researcher for <a href=\"http://www.ornl.gov/\" target=\"_blank\">Oak Ridge National Laboratory</a>. While there I developed a 3D visualizer for one of their databases using <a href=\"http://unity3d.com/5?gclid=Cj0KEQjwhuqrBRCFuPz4ipOx5JIBEiQAZJ7F-mMSEZ4CciSM5TfY8P4XjyHWrTkd2JTWTJwsaL_RsyoaArda8P8HAQ\" target=\"_blank\">Unity</a>'],
                additions: ['<a href=\"http://www.ornl.gov/\" target=\"_blank\"><img class=\'resource\' src=\'images/ORNL.png\'></a>'],
            },
            {
                title: 'Published Apps',
                text: ["I designed, developed, and published two mobile apps. The First was <a href=\"http://nooga.com/166180/utc-students-create-monetize-app-called-crunch-me/\"target=\"_blank\">Crunch Me</a>, which was published for iOS. The second was <a href=\"https://play.google.com/store/apps/details?id=stone.jackson.colorlocked&hl=en\"  target=\"_blank\">Color Locks</a>, which was published for both iOS and Android. Both were made using <a href=\"http://unity3d.com/5?gclid=Cj0KEQjwhuqrBRCFuPz4ipOx5JIBEiQAZJ7F-mMSEZ4CciSM5TfY8P4XjyHWrTkd2JTWTJwsaL_RsyoaArda8P8HAQ\" target=\"_blank\">Unity</a>"],
                additions: ['<a href=\"http://nooga.com/167681/utc-student-creates-app-that-invites-users-to-unlock-inner-artist/?fb_action_ids=1544184972479309&fb_action_types=og.likes\" target=\"_blank\"><img class=\'resource\' src=\'images/colorLocks.png\'></a>'],
            },
            {
                title: "TEDx Talk",//
                text: ["Chattanooga had their first ever <a href=\"http://tedxtalks.ted.com/video/Captivating-Software-Design-%7C-J\" target=\"_blank\">TEDx</a>, and I was a speaker."],
                additions: ['<iframe class=\'resource\' src=\"http://www.youtube.com/embed/7OObGFLDPtw\" frameborder=\"0\" allowfullscreen></iframe>'],
            },
        ],
        year: 2014,
        langues: ['Java, ', 'C#, ', 'PHP, ', 'SQL, ', 'Python'],

    });


    var PresentDay = new YearModel(
        {
            poi: [
                {
                    title: "Design Intern at LPG",
                    text: ['After the <a href=\"http://tedxtalks.ted.com/video/Captivating-Software-Design-%7C-J\" target=\"_blank\">TEDx talk</a> I became a designer at Lamp Post Group, learning the other end of the software equation.'],
                    additions: ['<a href=\"http://lamppostgroup.com/" target=\"_blank\"><img class=\'resource\' src=\'images/lpg.png\'></a>'],

                },
                {
                    title: "UX Designer at Torch",
                    text: [
                        "I then became a <a href=\"http://www.inc.com/shelley-prevost/we-are-humans-first-workers-second-why-ux-is-winning.html\" target=\"_blank\">UX Designer</a> for <a href=\"https://mytorch.com/\" target=\"_blank\">Torch</a>. Because of that, I've become comfortable with the entire <a href=\"http://mean.io/#!/\" target=\"_blank\">MEAN</a> stack.",
                        "Once designs were finalized for our products, I became a part of the development team.",

                    ],
                    additions: ['<a href=\"http://mytorch.com/\" target=\"_blank\"><img class=\'resource\' src=\'images/torch.png\'></a>']
                },
                {
                    title: "Published Research",
                    text: [
                        "I was <a href=\"http://modsimworld.org/papers/2015/Gamification_and_Visualization_of_Sensor_Data_Analysis_in_Research_Buildings.pdf\" target=\"_blank\">published</a> for my research at Oak Ridge and <a href=\"/images/gamification.zip\" download>presented</a> that research at a confrence called <a href=\"http://www.modsimworld.org/\" target=\"_blank\">MODSIM</a>."
                    ],
                    additions: ['<a href=\"http://modsimworld.org/papers/2015/Gamification_and_Visualization_of_Sensor_Data_Analysis_in_Research_Buildings.pdf"\" target=\"_blank\"><img class=\'resource\' src=\'images/researchProject.png\'></a>']
                }
            ],
            year: 2015,
            langues: [
                "Java, ",
                "C#, ",
                "PHP, ",
                "SQL, ",
                "Python, ",
                "HTML & CSS, ",
                "JavaScript (<a href=\"http://mean.io/#!/\" target=\"_blank\">MEAN Stack</a>)"
            ]
        });
var allYears = [Year2012, Year2014, PresentDay];
exports.allYears = allYears;
