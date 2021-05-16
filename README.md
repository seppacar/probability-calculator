# Probability Calculator

#### Description:

Probability Calculator is a tool for calculating other probabilities with given data using basic probability rules. I used Javascript, HTML and Bootstrap libraries creating the application.

The calculator needs at least ***two values*** for making calculations ***(You can calculate inverse of the P(A) or P(B) just entering one value)***
after entering the probability values click to ***submit*** button and other probabilities which can be calculated with given information will show up using basic probability equations such as.

* **P(A) = 1 - P(A')**
* **P(B) = 1 - P(B')**
* **P(A') = 1 - P(A)**
* **P(B') = 1 - P(B)**
* **P(A∩B) = P(A) * P(B)**
* **P(A∪B) = P(A) + P(B) - P(A∩B)**
* **P(AΔB) = P(A) + P(B) - 2P(A∩B)**
* **P((A∪B)') = 1 - P(A∪B)**
* **P(A occurs but B not) = P(A) * (1- P(B))**
* **P(B occurs but A not) = P(B) * (1- P(A))**

You can clear input fields to make a new calculation just by clicking ***clear*** button.
If theres no value entered to the input fields the website will throw an alert as warning which indicates that you should enter values in order to make calculations.

Since probability value is always between 1 and 0, if you enter values greater than 1 or smaller than 0 the website will throw you an alert as warning which indicating that you entered values which are out of range and points to the probability labels that you entered incorrect values.
