![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Node JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

# Query Hero
An AI powered tool for software engineers and data engineers to easily create databases and querys. Implemented Google Firebase for user authentication, enhancing security and user experience. User is prompted to select the database they are going to be working with. 'Get Started' component will give user exact step by step instructions on how to set up database based on user operating system and programing language of choice. Based on selected database, user can input in plain english what data they need to query from database and the prompt will fetch a query response from the Open AI API. 

<img width="900" alt="Screenshot 2023-07-30 at 1 40 31 PM" src="https://github.com/mexicanpepe/QueryHero/assets/104655832/84d947eb-36a4-4a08-aab8-287a203114d3">

<img width="900" alt="Screenshot 2023-08-05 at 3 20 10 PM" src="https://github.com/mexicanpepe/QueryHero/assets/104655832/d1c5d112-0e10-4364-8aaa-da5402fd9fb2">

<img width="900" alt="Screenshot 2023-08-05 at 3 19 03 PM" src="https://github.com/mexicanpepe/QueryHero/assets/104655832/50bd28d3-6af2-413a-ac18-211d45348075">


https://github.com/mexicanpepe/QueryHero/assets/104655832/8a3bb780-f8d6-432b-aae8-a0a9549954df

https://github.com/mexicanpepe/QueryHero/assets/104655832/84061493-3deb-4b64-9d1b-50f46bfeb6ca

https://github.com/mexicanpepe/QueryHero/assets/104655832/a4df94f3-57b4-439f-b53f-f299df361463


## Future Implementations
* Improve user experience by using the Open AI 'Text-Davinci-003' model for improved API response time.
* Include more databases to choose from. Currently Can choose 'PostgreSQL' or 'MongoDB'.
* Include a 'My Databases' component where use can access a history of querys created and databases created.


## Getting Started
1. From terminal, clone repo
```
git clone https://github.com/mexicanpepe/QueryHero.git
```
2. Install dependencies
```
npm install
```
3. Configure .env file server side to include Open AI API key
4. Follow sql schemas in the ELT scripts in schema.sql to set up database.
5. Start Client Front-End
```
npm run dev
```
6. Start server
```
npm run start
```
