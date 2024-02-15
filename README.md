# This is me following along
This is my tutorial code following along with the Cypress.io's Youtube video series: 
https://www.youtube.com/playlist?list=PL8GlT7H3xOcJbXNVnM6lTT3Fec8dikotY.

# Build and test an application using Cypress

This repository is the starting point for an official Cypress tutorial. 
We encourage you to clone this repo and follow along.

# Video 1: Project setup. 
- Cloned starter project.
- Installed dependancies.
- Added cypress to the project.
- Created input-form.spec.js and had it load the react TODO app. 

# Video 2: Text Inputs. 
- Added second test to enter input into .new-todo.
- Modified TodoApp and TodoForm to handle text entry.
- Modified tests to perform beforeEach and visit the site.
- abstracted the url to cypress.json as baseUrl.
- verified all tests run.

# Video 3: Form submission and XHRs. 
- Created a new context and test for form submit of todo item.
- Created a XHR Stub API services for submitting a todo item.
- Created another test that stubs an error with XHR.
- Added error handling to the TodoApp.

# Video 4: Loading Data with Fixtures. 
- Created stub for GET all todos in test.
- Added functionality for GET in service and TodoApp.
- Created a custom command to seed and visit app.
- Updated previous tests to allow for including the custom command.
- Verified all tests run as expected.

# Video 5: To Do Item Behavior. 
- Created a new list-items specification. 
- Wrote a test to see if a todo item is checked.
- Modified app to show if a todo item is checked.
- Wrote a test to validate the number of remaining todos that are unchecked.
- Modified app to show completed todo items.
- Wrote a test to remove a todo by using an alias.
- Implemented DELETE in service and implemented delete todo methods and calls to delete from the delete button.
- Verified tests work as expected

# Video 6: Toggling + Debugging. 
- Created a new test to mark a todo item as complete.
- Added PUT to service and added handleToggle to App and wired it up.
- Used the debugger statement to start to debug duplicate entry issue.
- Used Cypress Dev Tools to debug issue.
- Applied index fix to code, ran test again, it passes.
- Refactored todos update by mapping ids.
- Validated tests run as expected.
- 