# Capstone_Project

[![CircleCI](https://circleci.com/gh/NewthingAde/Capstone_Project/tree/main.svg?style=svg)](https://circleci.com/gh/NewthingAde/Capstone_Project/tree/main)


## Cloud DevOps Engineer Capstone Project

Configure environment variables on CircleCI

The following environment variablesz must be set for the project on CircleCI via the project settings page, before the project can be built successfully.

### Variable	Description

  - AWS_ACCESS_KEY_ID	Used by the AWS CLI
  
  - AWS_SECRET_ACCESS_KEY	Used by the AWS CLI

  - AWS_DEFAULT_REGION	Used by the AWS CLI. Project value: "us-west-2"
  
  -  AWS_ECR_URL	Identifies the AWS ECR docker image registry that the docker image will be pushed to, in the format        

  - AWS_ACCOUNT_ID.dkr.ecr.AWS_DEFAULT_REGION.amazonaws.com
