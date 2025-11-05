That is possible with a little bit of configuration in Jest, the runner used to execute*AskUI Controllers*.

Prerequisites
AskUI installed and configured on your system ( [[Start AskUI Controllers

The commands shown below start the AskUI Controller on your local machine as we are controlling two Android devices. If you want to run your workflows on a remote machine, install and start the controllers there. Do not forget to get the IP of the remote machine for the URL to the controller!*

### ‍ `

Jest

`First, we want to have a way to configure how many parallel processes are running workflows. For this, we install the `

```

```

.env`in the root of the project and fill it with the following. We set the`

```

```

### jest.config.ts `

jest.config.ts`. We use the environment variable`.env`file.

Connect AskUI Controllers in`In the `maxWorkers`and the`⚠️ *

```

```

*.test.ts`files will be executed in parallel and*The important thing is that each worker is completely independent and encapsulated. This means the setup process from`Conclusion

AskUI Controllers*you can parallelize the execution of your AskUI Workflows.