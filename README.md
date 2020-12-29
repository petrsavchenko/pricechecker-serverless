# pricechecker-serverless

This is rebranding of [pricechecker](https://github.com/petrsavchenko/pricechecker) (amazon goods price checker) aiming to get rid of server side care completely by going serverless with AWS. The app provides CRUD functionality for price checkers with display of thier statuses, history and etc. It also has an offline process operating on schedule basis to check the price and notify the users if it suits their criteria. 

The repo contains:
* Customer facing React App
* AWS CloudFormation script to be used to provision required resources to power the app 

## Getting Started 🚀

The app is based on [CRA](https://github.com/facebook/create-react-app).

I tried to keep number of packages as low as possible to reduce size of result package. There are packages used in the app:
* [grommet](https://v2.grommet.io/) - ui framework to build fancy user interfaces and don't care about design
* [formik](https://formik.org/) - form validation library to handle validation
* [aws-amplify](https://docs.amplify.aws/ui/q/framework/react) - for authentication

Global State Management implemented via React Hooks and Context API.

### AWS Resources

The main resource powers CRUD of price checkers is **API Gateway**. It serves as a proxy between frontend app and **DynamoDb** which stores the data about price checkers. As a part of cost optimization requirement, API Gateway does not have any Lambda functions behind, all mappings have been handled by Mapping templates, Integration Request and Integration Response. Error handling and request validation has been done on API Gateway side as well. There is a guide to follow to [here](https://medium.com/hackernoon/full-guide-to-building-a-serverless-api-with-zero-code-c4f7871998f5).

#### Offline process

Continuous price checking was implemented by **SQS** and **DynamoDb** triggers. Once user adds new price check record to DynamoDb, it triggers **Lambda** function, which checks price if the price suits the user's criteria it triggers email notification and terminates otherwise it adds message to SQS to be triggered on schedule (every 5 min by default).

Once message delay is expired, it triggers the lambda again which proceed as follow until eigher users criteria is met or user removes price check record.

![offline process diagram](/offline_process_diagram.svg) 

### Prerequisites

All you need to have is npm/yarn and valid AWS account.

### Installing

So to get it app and running you will need to:

```
npm i
npm start
```

## Authors

[**Petr Savchenko**](http://petrsavchenko.ru) - *Initial work* 

## License

This project is licensed under the MIT License.