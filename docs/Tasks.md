# Project Tasks

This file contains project tasks I should check to make sure the project is production and ready to use.

## Core Tasks

Make a simple web interface for this core then design it better later.

- [ ] Deploy the website on Netlify from hour 1 to test frequently
- [ ] Connect with user's GitHub with one click to see public repos (then scale to private too) to scan them – use **Subapase Auth** because it handles OAuth for free without backend code. 
- [ ] Connect online AI chatbot to use in the app, make it simple at first.
- [ ] Fetch repos from GitHub API – show them in a dropdown.

### Repo Scanner

Implement repo scaner to scan for:

1. files:
	- check the number of if/else conditions in main file
	- see what README file misses
	- see if .gitignore, LICENSE etc.. files are missing and suggest to add or improve based on the project. 
2. commits: 
	- to see if they follow conventional git commits or not so others can understand it and explain to him easily how to write those.
	- to see if the hacker is a night owl or early bird
	- to see if the hacker is coding late at night so we advice him to sleep then back to code for his health.

- [ ] Analyse each file's code quality