# Feed More
### A Food Sharing App

**Help Feed More Children and Hunger Striken People Across the Globe with just a Click.**

Feed More is a Web App aimed at helping Poor and Hunger Striken people from around the Globe attain food through NGOs
that manage, distribute and serve Poor people. The application will allow NGOs that require food donations for poor people
to Request Food items on this platform via a post on the platform along with the requirements. The restaurants will then be
able to allot their leftover inventory to the NGOs that require it based on the criteria set by the NGOs.

## User Roles
1. NGO
      - This user will create new Posts asking for Food Donations on the Platform.
2. Restaurant
      - This user will visit the application and view the Food Donation Requests. This user will be of two types;
          - Authenticated: A user with a complete profile on the platform
          - Unauthenticated: A user on the platform just to visit, maybe scroll around
3. Admin
      - The superuser of the application.

## Stack
### Client
1. Next @13
2. Tailwind
3. Custom Responsive Components using Tailwind
4. Custom Icons Components with SVGs
5. NextAuth (Google OAuth)

### Server
1. Node.js
2. Express.js
3. MongoDB

## Database Schema
### Item Table
| Attribute       | Type |  Properties  |
| --------------- | ---- | ------------ |
| id (PK)         | int  |   NOT_NULL   |
| name            | text |   NOT_NULL   |
| quantity        | text |   NOT_NULL   |
| perishable      | text |   NOT_NULL   |
| expiresIn       | text |              |
| restaurant (FK) | int  |              |

## Database ERD
![ERD Diagram for Feed More Database]()

## API Endpoints

## Task List
- [ ] Project Setup
  - [ ] Client
  - [x] Server
- [ ] DB Design
 - [ ] Test on Postman
- [ ] Connect Client to Server
- [ ] UI Design (**Subject to Change**)
  - [ ] WireFraming
  - [ ] Navbar
  - [ ] Landing Page
  - [ ] Login Page/Component (**No Modals**)
  - [ ] User Profile Page
  - [ ] Search Results Page
  - [ ] Home Page
  - [ ] Add Recipe Page
  - [ ] Recipe Dashboard
  - [ ] Edit Recipe Page
  - [ ] Recipe Expanded Page

**To Run the Project in Development Mode**
Execute the Following Commands:
- in the client directory:
```
npm i
npm run dev
```

- in the server directory:
```
npm i
npm run dev
```
