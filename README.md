# myapp
This project is a full-stack application consisting of a front-end and back-end, deployed on AWS. It includes a simple API and a static front-end, with data stored in a database. This README provides an overview of the project, setup instructions, and deployment steps.

Project Overview
Front-End: A static website hosted on Amazon S3.
Back-End: An API deployed on AWS Elastic Beanstalk.
Database: Uses Amazon RDS Postgres for data storage.



## Deployment diagram

                    +------------------+
                    |    User Browser   |
                    +--------+---------+
                             |
                             |
                             V
                   +---------+---------+
                   |    Amazon S3      |
                   |  (Static Website) |
                   +---------+---------+
                             |
                             |
                             V
                   +---------+---------+
                   |   AWS Elastic     |
                   |   Beanstalk       |
                   |  (API Backend)    |
                   +---------+---------+
                             |
                             |
                             V
                   +---------+---------+
                   |   Amazon RDS /    |
                   |   (Database)      |
                   +-------------------+
