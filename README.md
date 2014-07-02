# test-grunt-task-flow

Test the flow of grunt tasks when events are being emitted and listened for.

```bash
npm install
grunt
```

```
Running "log:one" (log) task
one

Running "log:two" (log) task
two

Running "event" task

Running "git-describe:dev" (git-describe) task
event
>> --edb3e3a

Running "log:three" (log) task
three

Running "log:four" (log) task
four
```
