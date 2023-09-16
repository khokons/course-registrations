
# Add at least 3 Project features
 ---
 
 _Certainly, here are three features of the project_


- Course Selection and Credit Tracking:
  - Users can select courses from a list of available courses by clicking the "Select" button associated with each course.
 - 

- Dynamic Data Fetching:
 - This feature allows for dynamic loading of course data, making it easy to update the available courses without changing the code.

- Toast Notifications for User Feedback:
  - Users are notified when they attempt to select a course that has already been chosen.
  - An error message is shown if a user tries to exceed the credit limit.
  - Toast notifications improve the user experience by offering clear and immediate feedback on their interactions with the application.

# Discuss how I managed the state in my assignment project

  _Answer_

- useState Hook Usage:
 - The useState hook is imported from 'react' and used to declare and manage state variables within functional components.

- State Variables:
  - Several state variables are declared in the App and Home components using the useState hook
  - count: In the App component, it keeps track of a count, although it doesn't seem to be used in this code snippet.
  - allCourses: In the Home component, it stores the list of all available courses fetched from a JSON file
  - selectedCourses: Also in the Home component, it maintains the list of courses selected by the user.
  - totalCost: This variable tracks the total cost of the selected courses in the Home component.
  - remaining: It keeps track of the remaining credit hours available for selection in the Home component.

- Updating State:
  - State variables are updated using the functions returned by the useState hook (e.g., setAllCourses, setSelectedCourses, setTotalCost, and setRemaining)
  - For example, when a user selects a course, the handleSelectCourse function in the Home component updates the state variables based on the selected course and the user's selections.

- Passing State as Props:
  -State variables and their values are passed as props to child components, allowing child components to access and display the state

  - For instance, the selectedCourses, totalCost, and remaining state variables are passed as props to the Cart component, which displays this information in the cart

- UseEffect for Fetching Data:
  - The useEffect hook is used in the Home component to fetch course data from a JSON file when the component mounts. The fetched data is then stored in the allCourses state variable.
  
 ---
<p>Overall, React's useState and useEffect hooks are used effectively to manage and update the state of the application. State is used to store and track various pieces of data that are crucial for rendering components and providing dynamic behavior to the user interface. When state changes, React efficiently re-renders components to reflect the updated data</p>









