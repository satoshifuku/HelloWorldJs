# HelloWorldJs

## Overview
The project is created for a workshop of Human interface symposium 2019 on 2 September 2019.
The HelloWorldJs repository is a simple project that gets you experience Git with GitHub.


### You’ll experience how to:

- Clone and use a repository  
- Start and manage a branch  
- Make changes to a file and push them to GitHub as commits  

## Step 1: Install Git

### check git

Check Git installed.

> $ git --version

If you don’t have it installed, access to the following cite.

#### Mac
https://git-scm.com/download/mac

#### Windows
https://git-scm.com/download/win


There are detail of instructions for installing at https://git-scm.com/book/en/v2/Getting-Started-Installing-Git


## Step 2: Creat GitHub accaount 

In order to complete the workshop, you need an account of GitHub.com.   
Visit the following URL:  
https://github.com/

## Step 3: Clone a repository 
A repository is a unit associate with one project, which is used to organize one.
When you want to copy the repository to your local directory, you need to use "Clone" command.

> $ cd {your directory}  
> $ git clone https://github.com/satoshifuku/HelloWorldJs.git

## Step 4: List branches 

Branching is the way to progress different versions of a repository at one time.
You can list branches in your repository with "branch" command.

> $ cd {directory of local repository}  
> $ git branch 

## Step 5: Switch branches

> $ git checkout {a branch}

## Step 6: Create a new branch

Users of Git create branches for keeping bug fixes and feature work separate from our master (production) branch. 
When a change is ready, they merge their branch into master.

Create new branch before changing a code.

> $ git checkout {a branch}  
> $ git branch {a new branch}

Check the new branch is created.
> $ git branch

Change a code to add a new function which you want.

## Step 7: Commit changes to a repositoty

When you want save your changes to the repository, you need to use "commit" command.
A commit has a commit message which explains why the change was made. 

Stage your edited files.
> $ git add .

Commit your edited files.
> $ git commit -m "commit message"


## Step 8: Push a branch

Push your branch to origin (remote repositoty) on Github.
> $ git push origin {your branch}