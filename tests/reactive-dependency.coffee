describe 'ReactiveDepencency', ->
	it 'can be created', ->
		dependency = new ReactiveDependency(5)
		expect(dependency.get()).toBe(5);
	it 'can be updated', ->
		dependency = new ReactiveDependency(5)
		dependency.set('app')
		expect(dependency.get()).toBe('app');
	it 'can be updated', (done)->
		dependency = new ReactiveDependency(5)
		expectedValue = 5
		runCount = 0
		Deps.autorun(->
			expect(dependency.get()).toBe(expectedValue)
			runCount++
			if hasDependencyBeenUpdated
				expect(runCount).toBe(2)
				done()
		)
		expectedValue = "value is now updated"
		hasDependencyBeenUpdated = true
		dependency.set("#{expectedValue}")
