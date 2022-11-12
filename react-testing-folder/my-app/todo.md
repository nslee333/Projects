React testing todo:


1. Add decimal precise library calculations to calculation() function?
    - Decide on this :)
2. Clear all button
    - Clear history too?
    - Commands?

3. History of calculations.

Current task: - history of calculations

Everytime a calculation is made
    - calculation is converted into a string.
    - The string is then pushed to a history array, then we display it to the user.

[bug] - Calculate() is getting called a bunch of times, which is adding three entries to the history array compared to what I want (one)
    - Do we stop calling calculate()? 
    - Or do we add a conditional to the addHistoryCall
- The issue is coming from the fact that it needs to be calculated 3 times to get the right answer.
    - This might be a bigger design issue D:
    - At calculation() - numberB isn't set.
        - Probably coming from checkState() function.
        - Might need to redesign how checkState() works - maybe take some notes from React Test? [not sure if that counts because it doesn't have the same functionality.


- The issue is coming from the checkState() function, it's only going to set when calculated ==== true,
    that's why it takes two equals presses.

Possible workaround: 
    - Set a counter and only push every third submission - 
        - not sure if I care for this solution.
    : rethink conditional for checkState