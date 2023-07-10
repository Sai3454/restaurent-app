// // import { PrismaClient } from '../../../datasources/generated-clients'
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient()

// async function getUsersWithPosts() {
//   try {
//     // Fetch users along with their associated posts
//     const usersWithPosts = await prisma.restaurent.findMany({
//       include: {
//         menuItems: true,
//       },
//     });

//     // Return the combined data as a response
//     return usersWithPosts;
//   } catch (error) {
//     // Handle any errors that may occur
//     console.error('Error retrieving users with posts:', error);
//     throw error;
//   }
// }

// // Call the function and handle the response
// getUsersWithPosts()
//   .then((response) => {
//     console.log('Users with posts:', response);
//     // You can send the response to the client or perform further operations
//   })
//   .catch((error) => {
//     // Handle any errors that may occur during the process
//     console.error('Error retrieving users with posts:', error);
//   });
