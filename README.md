# Design Patterns in JavaScript

This repository contains simple implementations of common design patterns in JavaScript for learning and reference purposes.

## Design Patterns Implemented

1. **Factory Pattern** - `factory.js`
    - The Factory Pattern provides an interface for creating objects in a super class, but allows subclasses to alter the type of objects that will be created. It encapsulates object creation and provides a way to instantiate objects without specifying the exact class of the object that will be created.

2. **Singleton Pattern** - `singleton.js`
    - The Singleton Pattern ensures that a class has only one instance and provides a global point of access to that instance. It is useful when a single point of control is needed, like managing shared resources.

3. **Provider Pattern** - `provider.js`
    - The Provider Pattern is used to inject dependencies into a class. It decouples the class from the actual service being used, allowing easy switching between different implementations of the service (e.g., Email, SMS).
