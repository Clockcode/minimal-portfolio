import creatorOSThumbnail from "../assets/images/creator_os_thumbnail.png"
import youtubeAnalyzerThumbnail from "../assets/images/youtube_analyzer_thumbnail.png"
import electionReportingThumbnail from "../assets/images/election_reporting_thumbnail.png"
import subscriptionManagementThumbnail from "../assets/images/subscription_management_thumbnail.png"
const projects = [
  {
    "url": "/projects/subscription-management",
    "imgURL": subscriptionManagementThumbnail,
    "alt": "Subscription Management thumbnail",
    "title": "Subscription Management",
    "desc": "A system for managing and analyzing subscription data.",
    "subtitles": ["Product Design", "Visual Design", "UX Research"],
    "locked": true
  },
  {
    "url": "/projects/election-reporting",
    "imgURL": electionReportingThumbnail,
    "alt": "Election Reporting System thumbnail",
    "title": "Election Reporting System",
    "desc": "A system for reporting and analyzing election results.",
    "subtitles": ["Product Design", "Visual Design", "UX Research"],
    "locked": false
  },
  {
    "url": "/projects/creator-os",
    "imgURL": creatorOSThumbnail,
    "alt": "CreatorOS logo",
    "title": "CreatorOS - Creator Ecosystem",
    "desc": "Discover creators, find the right buyers for them and manage theur deals. All in one platform",
    "subtitles": ["Product Design", "Visual Design", "UX Research"],
    "locked": false
  },
  {
    "url": "/projects/youtubeanalyzer",
    "imgURL": youtubeAnalyzerThumbnail,
    "alt": "Youtube Analyzer extension image",
    "title": "Youtube Analyzer - Video Summarizer",
    "desc": "Don't have time to watch the whole video, let Youtube Analyzer summarize it for you.",
    "subtitles": ["Development", "UI Design", "Chrome Extension", "Tool"],
    "websiteLink": "https://youtubeanalyzer.tech",
    "appLink": "https://chrome.google.com/webstore/detail/youtube-analyzer/oefncahpjhmbhahohenajofmeleahjen",
    "locked": false
  }
]

export default projects;
