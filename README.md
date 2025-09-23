# Parking Meter (Parquímetro) - OOP Case Study

A simple parking meter application built as an Object-Oriented Programming (OOP) case study for the **EBAC Front-end Development Course**.

## 📋 Project Overview

This project demonstrates the implementation of OOP principles in JavaScript by creating a parking meter system that calculates parking time based on the amount paid and manages change when necessary.

## 🎯 Learning Objectives

- **Object-Oriented Programming**: Implementation of classes, constructors, and methods
- **Encapsulation**: Data and methods organized within a class structure
- **DOM Manipulation**: Interactive user interface with real-time calculations
- **Input Validation**: Error handling and user feedback
- **Business Logic**: Real-world parking meter calculations

## 🚀 Features

- **Dynamic Time Calculation**: Calculates parking time based on payment amount
- **Pricing Tiers**: Three different pricing levels with progressive rates
- **Change Management**: Returns change when payment exceeds maximum time
- **Input Validation**: Validates user input and provides helpful error messages
- **Responsive Design**: Clean, modern interface that works on different screen sizes

## 💰 Pricing Structure

| Payment | Time Allocated |
| ------- | -------------- |
| R$ 1.00 | 30 minutes     |
| R$ 1.75 | 60 minutes     |
| R$ 3.00 | 120 minutes    |

**Maximum parking time**: 120 minutes

## 🛠 Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with flexbox and responsive design
- **JavaScript ES6+**: Object-oriented programming with classes
- **DOM API**: Interactive user interface

## 📁 Project Structure

```
parquimetro/
├── index.html      # Main HTML structure
├── styles.css      # Stylesheet with modern design
├── script.js       # JavaScript with OOP implementation
└── README.md       # Project documentation
```

## 🏗 OOP Implementation

### Class Structure

The main `parquimetro` class includes:

- **Constructor**: Initializes parking meter with default values
- **Input Validation**: `validarValor()` method for payment validation
- **Business Logic**: `calcularTempo()` method for time calculations
- **UI Management**: `mostrarResultados()` and `limparResultados()` methods
- **Main Process**: `processar()` method that orchestrates the entire flow

### Key OOP Concepts Demonstrated

1. **Encapsulation**: Data (valor, tempo, troco) and methods are encapsulated within the class
2. **Method Organization**: Logical separation of concerns across different methods
3. **State Management**: Object maintains its state throughout the interaction
4. **Reusability**: Class can be instantiated and reused multiple times

## 🚀 How to Run

1. Clone or download the project files
2. Open `index.html` in a web browser
3. Enter a payment amount in the input field
4. Click "Calcular Tempo" to see the allocated time and any change

## 🎓 Educational Context

This project was developed as part of the **EBAC (Escola Britânica de Artes Criativas) Front-end Development Course** to demonstrate practical application of:

- Object-Oriented Programming principles
- Clean code organization
- User interface design
- Real-world problem solving with JavaScript

## 🔧 Future Enhancements

Potential improvements for advanced study:

- Multiple payment methods
- Parking history tracking
- Timer countdown functionality
- Mobile app integration
- Database storage for transactions

## 📝 License

This project is for educational purposes as part of the EBAC Front-end Development Course.

---

**Course**: Front-end Development  
**Institution**: EBAC (Escola Britânica de Artes Criativas)  
**Focus**: Object-Oriented Programming Case Study
