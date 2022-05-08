## Inspiration
We were inspired by our own experiences as students taking online classes. Compared to traditional in-person classes, we felt that it was harder to stay focused during virtual lessons and we found ourselves struggling to understand material.

We decided to use this hackathon as an opportunity to build an application that would make online learning more fun. We also hoped to make online learning more organized, with features to keep track of course material and assess students’ knowledge through easily accessible quizzes.

## What it does
**EduFlash** is a platform for teachers and students to supplement virtual/hybrid learning using gamification and a unique point system.

First, teachers and students can access their personal accounts through a Auth0 login system. 

As a student, users can view class announcements from the homepage. They can also receive announcements via SMS (Twilio API). Students can also access course materials, such as external links or class notes from their teacher, on the Classes page.

To earn points, students take daily quizzes where the number of correct answers adds points to their cumulative score. 

As a teacher, users are able to create these quizzes, announcements, and course materials from their accounts.
Using this kind of point system, rather than a traditional grade, motivates students to learn because their “score” isn’t out of a total score (ex: 78/100). Instead, students can see their score improve over time and there is a greater focus on the students’ progress instead of their mistakes.

## How we built it
We initially created a Figma prototype to design our project’s UI and decide what pages we needed to create.

The **EduFlash** application itself was built using ReactJS.

We also incorporated Auth0 for logging into **EduFlash** and the Twilio API for SMS capabilities.

## Challenges we ran into
One challenge we ran into was some of our team members’ unfamiliarity with ReactJS which has turned into an amazing learning experience for every member. We were also new to a lot of libraries, dependencies, and APIs such as axios, Twilio, and Auth0. We were able to overcome one challenge after another by watching lots of tutorials online, experimenting on our own, and asking each other for help.

## Accomplishments that we're proud of
We are proud of being able to launch our project in such a short amount of time and combine so many different technologies together. We feel confident that **EduFlash** has the potential to make a real difference and improve the quality of online students’ education.

We’re proud that we were able to create a MVP with **EduFlash’s** main functionalities ready to go, on top of creating an aesthetically pleasing UI design.

## What we learned
We learned how to use Auth0, which turned out to be crazy easy to implement.

## What's next for EduFlash
In the future, we want to add an Achievements feature for **EduFlash** to mark milestones in the students’ point progress (ex: 100pts, 200pts, etc). We feel that this would emphasize the gamification aspect of our application even more.

Also, we’d like to continue to improve **EduFlash’s** UI, as outlined in the Figma prototype.



_Icons from https://www.flaticon.com/authors/pixel-perfect & https://www.flaticon.com/authors/freepik_
