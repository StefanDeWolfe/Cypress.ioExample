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