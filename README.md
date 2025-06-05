# MERN-Chatroom
This project was build in a day and half and theres plenty of improvements that could be done, so i've decided to list them

1. The backend is VERY rudimentary, not password encrypting, no constrain verification and no JWT tokens.

2. Functions like fetchAllUsers in the UsersList.tsx should be refactored and moved into their own standalone helperFunctions.ts file

3. The message sender first and last name should be derived from their _id, and not passed along as their own variable as they are.

4. In UsersList.tsx, both the messageContent and receiver state variables could probably be combined into a single state variable (Not sure, havent thought about it all the way).

5. Getting message by ReceiverId probs shouldnt be done with a path param cause it shows the usersId in the URL request, i did this way to rehash the usage of path params. 

Plenty of other misalleneous impromevents could be done with the proper time and attencion.

