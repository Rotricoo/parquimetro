# Parking Meter - OOP Case Study

A simple parking meter application built as an Object-Oriented Programming (OOP) case study for the **EBAC Front-end Development Course**.

## Project Overview

This project demonstrates the implementation of OOP principles in JavaScript by creating a parking meter system that calculates parking time based on proportional payment calculations and manages change when necessary.

## Learning Objectives

- **Object-Oriented Programming**: Implementation of classes, constructors, and methods
- **Encapsulation**: Data and methods organized within a class structure
- **DOM Manipulation**: Interactive user interface with real-time calculations
- **Input Validation**: Error handling and user feedback
- **Mathematical Logic**: Proportional calculations based on payment ranges

## Features

- **Proportional Time Calculation**: Calculates parking time using proportional math within payment ranges
- **Three Payment Tiers**:
  - AUD $1.00 - $1.74: Base 30 minutes + proportional calculation
  - AUD $1.75 - $2.99: Base 60 minutes + proportional calculation
  - AUD $3.00+: Fixed 120 minutes (maximum time allowed)
- **Change Management**: Returns change when payment exceeds AUD $3.00
- **Input Validation**: Validates user input and provides helpful error messages
- **Real-time Results**: Instant calculation display with formatted output

## Pricing Structure

| Payment Range     | Base Time | Calculation Method        |
| ----------------- | --------- | ------------------------- |
| AUD $1.00 - $1.74 | 30 min    | Proportional within range |
| AUD $1.75 - $2.99 | 60 min    | Proportional within range |
| AUD $3.00+        | 120 min   | Fixed maximum + change    |

## How Proportional Calculation Works

The system uses mathematical proportions to calculate time within each payment range:

- **Range 1**: For every AUD $0.75 increment above $1.00, adds proportional minutes
- **Range 2**: For every AUD $1.25 increment above $1.75, adds proportional minutes
- **Range 3**: Maximum time reached, excess payment returned as change

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling and responsive design
- **JavaScript ES6+**: OOP implementation with classes

## How to Run

1. Open `index.html` in any modern web browser
2. Enter a payment amount (minimum AUD $1.00)
3. Click "Calculate Time" to see results
4. View calculated time and change (if applicable)

## License

This project is for educational purposes as part of the EBAC Front-end Development Course.

---

**Course**: Front-end Development  
**Institution**: EBAC (Escola Britânica de Artes Criativas)  
**Focus**: Object-Oriented Programming with Mathematical Calculations
