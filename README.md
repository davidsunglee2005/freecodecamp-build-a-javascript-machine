# JavaScript Calculator

### Objective
Build an app that is functionally similar to this: [JavaScript Calculator Example](https://javascript-calculator.freecodecamp.rocks/).

Fulfill the user stories below and ensure all tests pass. Use any libraries or APIs you need, and give it your own personal style.

### Notes
- **React 18 Incompatibility**: There are known issues with the tests for this project when using React 18 ([see issue](#)).
- Use a frontend framework (like React) as this section focuses on learning frontend frameworks. Other technologies not listed below are used at your own risk.
- Supported technologies include HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery.

### User Stories

1. **Clickable "=" Button**  
   My calculator should contain a clickable element with an equal sign (`=`) and an `id="equals"`.

2. **Clickable Number Buttons**  
   My calculator should contain 10 clickable elements, one for each number `0-9`, with corresponding IDs:  
   `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, `id="nine"`.

3. **Primary Operators**  
   My calculator should contain 4 clickable elements for the primary operators (`+`, `-`, `*`, `/`) with corresponding IDs:  
   `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.

4. **Decimal Point**  
   My calculator should contain a clickable element for the decimal point (`.`) with an `id="decimal"`.

5. **Clear Button**  
   My calculator should contain a clickable element with an `id="clear"`.

6. **Display Values**  
   My calculator should contain an element to display values with an `id="display"`.

7. **Clear Functionality**  
   Pressing the clear button resets the calculator to its initialized state, displaying `0` in the `display` element.

8. **Input Display**  
   As I input numbers, they should appear in the `display` element.

9. **Chained Calculations**  
   I should be able to perform chained calculations (e.g., `5 + 5 - 3 * 2`) and see the correct result when `=` is pressed.

10. **Leading Zeros**  
    My calculator should not allow numbers to start with multiple zeros (e.g., `0001`).

11. **Decimal Logic**  
    Clicking the decimal button (`.`) appends a `.` to the displayed value. Multiple `.` in one number are not allowed.

12. **Operations with Decimals**  
    I should be able to perform operations (`+`, `-`, `*`, `/`) on numbers with decimal points.

13. **Consecutive Operators**  
    If multiple operators are entered consecutively, the last operator entered (excluding `-`) should be used.  
    - Example: `5 + * 7` should evaluate as `5 * 7 = 35`.

14. **New Calculation**  
    Pressing an operator after `=` starts a new calculation using the previous result.

15. **Precision**  
    My calculator should handle calculations with reasonable precision (e.g., `2 / 7` should display at least 4 decimal places).

### Notes on Calculator Logic
There are two primary approaches to calculator logic:
- **Immediate Execution Logic**: Operates calculations as soon as operators are entered.
- **Formula Logic**: Observes order of operations and calculates based on the complete formula.

**Example: `3 + 5 * 6 - 2 / 4`**
- Immediate Execution Logic: `11.5`
- Formula/Expression Logic: `32.5`

Either approach is acceptable, as long as the results can be verified using another calculator.

### Setup
You can use the following tools to build and test your project:
- [CodePen Template](#) (click **Save** to create your own pen).
- [FCC CDN Link](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js): Include this to run tests in any environment.

### Submission
Once complete, submit the URL to your working project with all tests passing.
