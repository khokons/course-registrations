
# Add at least 3 Project features
 ---
 
 _Certainly, here are three features of the project_


- Course Selection and Credit Tracking
- Dynamic Data Fetching
- Toast Notifications for User Feedback

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








