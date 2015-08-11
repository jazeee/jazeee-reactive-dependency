# A simple Reactive Dependency class to wrap Meteor Deps.Dependency

### Usage
```coffeescript
dependency = new ReactiveDependency(someValue)
dependency.set(5)
dependency.set("abc")
dependency.get()

# Provide access to a reactive variable in the client.
Template.yourTemplate.helpers({
	dependency: -> return dependency.get()
})

```

### Test
Test using velocity. https://velocity.readme.io/
```bash
velocity test-package jazeee:reactive-dependency ./
```