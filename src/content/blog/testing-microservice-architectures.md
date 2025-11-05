Testing a microservice architecture has its own challenges and strategies which we will outline in this blogpost.

## Unit tests

Contract tests

Producer driven: The microservice provides tests that emulate API requests potential consumers of the service can make.

### Integration testing involves two or more microservices and focuses on the interaction between those services and not on the desired behavior. They test if the services can communicate with each other, third-party services and databases on an interface level.

### In contrast to integration tests component tests focus on the behavior of two or more services that form a business function. They are therefore a form of acceptance test.

### After ensuring that every service and every component of the system does what it should do E2E Tests make sure that the whole application fulfills the business objectives.

Conclusion