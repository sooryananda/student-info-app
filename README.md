# Student Information System

## Team Members
- S P Sooryananda – Team Lead / Developer
- Aditi Ahuja – UI Developer
- Jiya Elza Jabi – JavaScript Developer

## Project Description
A simple static web application that displays student information
(Name, Register Number, Programme) with a "Show Details" button and
a contact information section. This project was built as part of a
DevOps lab exercise to learn collaborative Git workflows using
branches, pull requests, and merge conflict resolution.

## Technologies Used
- HTML5
- CSS3
- JavaScript (vanilla)
- Git & GitHub

## Git Branching Strategy
- `main` – stable, production-ready branch
- `feature/ui` – UI/CSS improvements
- `feature/javascript` – JavaScript functionality (Show Details button)
- `feature/contact` – added contact information section
- `feature/student-name` – updated the application heading
- `feature/app-title` – updated the application title (caused a merge conflict with feature/student-name)

Each team member worked on a separate feature branch and merged
changes into `main` via Pull Requests, rather than committing
directly to `main`.

## Pull Requests Created
1. `feature/ui → main` — Improve student information UI
2. `feature/javascript → main` — Add student details functionality
3. `feature/contact → main` — Add contact information
4. `feature/student-name → main` — Update application heading
5. `feature/app-title → main` — Update application title (resolved merge conflict)

## Merge Conflict

**What caused it:**
`feature/student-name` and `feature/app-title` were both created from
the same commit on `main`, and both branches modified the same line
— the `<h1>` heading in `index.html` — but with different text.
When `feature/student-name` was merged first, `feature/app-title`
could no longer merge automatically because Git could not determine
which version of that line to keep.

**How it was resolved:**
The conflicting branch (`feature/app-title`) was updated locally with
`git merge main`, which produced conflict markers (`<<<<<<<`,
`=======`, `>>>>>>>`) around the two different heading versions. The
two versions were manually reviewed and combined into a single final
heading:

```html
<h1>Student Management System – MCA</h1>
```

The conflict markers were removed, the file was staged and committed
with `git commit -m "Resolve merge conflict in application title"`,
and the branch was pushed. The Pull Request then became mergeable and
was merged into `main`.

## How to Run the Application
1. Clone the repository: https://github.com/sooryananda/student-info-app
2. Open the project folder.
3. Open `index.html` directly in any web browser (double-click it,
   or right-click → "Open with" → your browser).
4. No server, database, or installation is required.