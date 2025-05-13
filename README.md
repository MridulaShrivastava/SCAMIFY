SCAMIFY: PHISHING WEBSITE DETECTION USING MACHINE LEARNING

Project Overview
This project aims to detect phishing websites using machine learning techniques. The objective is to build a robust model that analyzes URLs based on significant features and provides users with a platform for real-time legitimacy checks through an interactive web interface.

Problem Statement
Most existing systems analyze only the URL structure and fail to generalize across various website types. They also lack a dedicated interface for easy and accessible usage, making it difficult for general users to detect phishing threats effectively.

Solution
We developed a machine learning-based solution that detects phishing websites by extracting key features from the input URL. A web interface was also developed where users can enter a URL and receive instant feedback. If the URL is flagged as phishing, it is logged for further analysis to continuously enhance the model’s performance.

Dataset
The dataset used in Scamify consists of a total of 88,647 samples with 111 features per sample, covering lexical, domain-based, and content-based attributes. Each sample is labeled with the binary target phishing, indicating whether the URL is legitimate (0) or a phishing site (1).

Achievements
•	Implemented a feature extractor for real-time phishing prediction.
•	Built an intuitive web interface for end-users.
•	Achieved 92.94% cross-validation accuracy using the Random Forest classifier.
•	Obtained 95.20% accuracy on the training set.
•	Reached 93.02% accuracy on the test set, demonstrating strong generalization performance.


Tools and Technologies
Programming Language: Python
Libraries and Frameworks: Scikit-learn, Pandas, NumPy, Matplotlib
Development Environments: VS Code
Machine Learning Techniques: Random Forest, Ensemble Methods
Web Development: Flask, HTML, CSS, JavaScript

Features
•	Phishing Detection: Classifies input URLs as either legitimate or phishing.
•	User Interface: Simple and responsive interface to check URLs in real-time.
•	Logging: Stores flagged phishing URLs for future model training and evaluation.
•	Lightweight Backend: Fast and efficient response using Flask and pre-trained ML model.

Future Work
•	Enhance model performance with deep learning and updated threat intelligence APIs.
•	Expand the dataset to include a wider variety of phishing websites.
•	Improve the front-end for a more seamless user experience.
•	Add user authentication and result history tracking features.

Contributors
Disha Dutta- Developer
Kumari Sonam- Developer
Mridula Shrivastava- Developer
Muskan Atray- Developer
Praavinya Chaturvedi- Developer





