# ☕ Workshop: Playwright + BDD/Cucumber + GitHub Actions

## Workshop Overview
This is a summary of a one-week school workshop where I worked on testing the game **Espresso Addict** using Playwright and Cucumber/BDD. The goal of the workshop was to implement end-to-end tests, improve the automation process, and integrate everything with GitHub Actions for continuous integration.

### Workshop Objectives:
During the workshop, I was tasked with:
- **Setting up Playwright with Cucumber** to follow a BDD approach for testing.
- Implementing tests that demonstrate:
  1. The player can win the game in at least two different ways, following different sequences of actions.
  2. The player always loses if they choose to "wait" repeatedly at any location. These tests were pre-written but needed to be included and potentially refactored.
  3. The player can navigate to the help page and return to the same location in the game, except from the win or lose pages.
  
- Writing **reusable step definitions** to ensure the tests are efficient and easy to maintain.
- Reducing reliance on CSS/XPath locators and instead utilizing **Playwright's recommended locators** on [this page](https://playwright.dev/docs/selectors), following best practices.


## How to Install the Project and Run Tests

### 1. Clone the Repository:
```bash
git clone <your-repository-url>
cd <your-repository-name>
```
### 2. Install Dependencies:
Ensure you have Node.js installed, then install the required packages.
```bash
npm install
```

### 3. Run the Game:
To start the Espresso Addict game locally:
```bash
npm start
```

### 4. Run Tests:
To run all Cucumber/BDD tests, execute:
```bash
npm test
```
### 5. Running Tests in Specific Browsers:
To run tests for a specific browser, use the following commands:

**Chromium:**
```bash
npm run test-chromium
```
**Firefox:**
```bash
npm run test-firefox
```
**WebKit:**
```bash
npm run test-webkit
```
