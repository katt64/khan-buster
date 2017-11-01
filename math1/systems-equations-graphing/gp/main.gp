/*
 * main.gp      PARI/GP program to cheat "Systems of equations with graphing"
 *
 * See relevant documentation in `README.md`
 */
{
    local(eqa, eqb, eqc, holyarray = [matrix(2, 2), vector(2)], i = 1);
    kill(x);

    until(i > 2, 
        \\ Prompt for input from mathematically-challenged people.
        print("Enter equation #" i " of the system.");
        print1("a? "); eqa = input();
        print1("b? "); eqb = input();
        print1("c? "); eqc = input();

        \\ Save input to matrix for later processing.
        holyarray[1][i,1] = eqa;
        holyarray[1][i,2] = eqb;
        holyarray[2][i] = eqc;

        i++;
    );

    \\ Convert to slope-intercept form.
    i = 1;
    while(i <= 2,
        eqslopeint = (holyarray[1][i,1] / -holyarray[1][i,2])*x
          + (holyarray[2][i]/holyarray[1][i,2]);

        print("Equation " i "\ty = " eqslopeint);
        
        i++;
    );

    \\ Solve for a real solution.
    print("The solution vector is: " matsolve(holyarray[1], holyarray[2]~));
    quit();
}
