Contributing
When contributing to this repository, please first discuss the change you wish to make via issue with the maintainers of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

Pull Request Process
Ensure any install or build dependencies are removed before the end of the layer when doing a build. Add only relevant files to commit and ignore the rest to keep the repo clean.
Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
You should request review from the maintainers once you submit the Pull Request.
Instructions
Git Workflow
## Step 1: Fork Repository

## Step 2: Git Set Up & Download
# Clone the repo
$ git clone https://github.com/<User-Name>/<Repo-Name>.git
# Add upstream remote
$ git remote add upstream https://github.com/ashutosh-rath02/git-re.git
# Fetch and merge with upstream/master
$ git fetch upstream
$ git merge upstream/master

## Step 2: Create and Publish Working Branch
$ git checkout -b <type>/<issue|issue-number>/{<additional-fixes>}
$ git push origin <type>/<issue|issue-number>/{<additional-fixes>}

## Types:
# wip - Work in Progress; long term work; mainstream changes;
# feat - New Feature; future planned; non-mainstream changes;
# bug - Bug Fixes
# exp - Experimental; random experiemntal features;
On Task Completion:
## Committing and pushing your work
# Ensure branch
$ git branch
# Fetch and merge with upstream/master
$ git fetch upstream
$ git merge upstream/master
# Add untracked files
$ git add .
# Commit all changes with appropriate commit message and description
$ git commit -m "your-commit-message" -m "your-commit-description"
# Fetch and merge with upstream/master again
$ git fetch upstream
$ git merge upstream/master
# Push changes to your forked repository
$ git push origin <type>/<issue|issue-number>/{<additional-fixes>}

## Creating the PR using GitHub Website
# Create Pull Request from <type>/<issue|issue-number>/{<additional-fixes>} branch in your forked repository to the master branch in the upstream repository
# After creating PR, add a Reviewer (Any Admin) and yourself as the assignee
# Link Pull Request to appropriate Issue, or Project+Milestone (if no issue created)
# IMPORTANT: Do Not Merge the PR unless specifically asked to by an admin.
After PR Merge
# Delete branch from forked repo
$ git branch -d <type>/<issue|issue-number>/{<additional-fixes>}
$ git push --delete origin <type>/<issue|issue-number>/{<additional-fixes>}
# Fetch and merge with upstream/master
$ git checkout master
$ git pull upstream
$ git push origin
Always follow commit message standards
About the fork-and-branch workflow

### Alternatively, contribute using GitHub Desktop

1. **Open GitHub Desktop:**
   Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository:**
   - If you haven't cloned the JobLane repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
   - Choose the JobLane repository from the list of repositories on GitHub and clone it to your local machine.

3. **Switch to the Correct Branch:**
   - Ensure you are on the branch that you want to submit a pull request for.
   - If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.

4. **Make Changes:**
   Make your changes to the code or files in the repository using your preferred code editor.

5. **Commit Changes:**
   - In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
   - Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.

6. **Push Changes to GitHub:**
   After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

7. **Create a Pull Request:**
  - Go to the GitHub website and navigate to your fork of the JobLane repository.
  - You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. **Review and Submit:**
   - On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
   - Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. **Wait for Review:**
    Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the JobLane repository.

⭐️ Support the Project
If you find this project helpful, please consider giving it a star on GitHub! Your support helps to grow the project and reach more contributors.
