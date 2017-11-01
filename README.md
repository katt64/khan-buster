# *khan-buster*
Quick scripts and programs that follow the UNIX philosophy, to cheat
tediously-frequent, stupidly-difficult problems appearing on Khan Academy.

## Introduction
Made out of rage, tedium, boredom, anger, frustration, exhaustion, resentment,
and many other things that have been bottled up in my mind for about a year now;
I present to you, **khan-buster**!

## Old Man Yells At Cloud (Background and Motivation)
I am a frustrated high-school student who is going to hate mathematics very soon
if I do not get any help with it. The problem is that I am not very good at
mathematics. I keep forgetting:

- The signs (+/-).

    For example, the problem said `-3x^2` and I almost always accidentally copy
    it into my scratchpad on Vim as `3x^2`, missing out the negative sign and
    eventually losing points repeatedly on the same problem, only to realize
    later that one negative sign was missed out or added. I also miss out the
    negative signs on the display of my calculator far too many times.
    
    This happens so many times, with more than 50% probability of it
    happening, that I lose points on those such exercises, and I get so fucking
    frustrated that words cannot even describe said frustration.

- How to actually solve the problem.

    Don't you just feel kind of fucked when you're sitting in a practice exam
    (like Khan Academy), pretending you're in exams conditions (which I will
    have to be in soon), and you suddenly forget how to do this one simple
    problem a few questions into the "exam"? That really always happens to me,
    because I'm some sort of moron with ADHD, LD, or something.

    As a consequence, I often have to resort to tedious brute-force and
    trial-and-error, which yields a staggering probability of losing points
    (which approaches 100%). I do this because I don't want to spend upwards of
    12&ndash;15 minutes of my life listening to Sal Khan over-explaining a
    problem, drawing superfluous lines on his screen, and repeating over what he
    previously said way too many times. Furthermore, the people in the comments
    section of his videos seem to really enjoy watching it, even to the extent
    of watching from beginning to end of the video, and asking/making really
    clever questions and points that I cannot even dream to concoct; it really
    makes me jealous of how smart and willful those people are.

    I think the issue about the videos is that I have some sort of ADHD and
    learning disorder. I prefer short, concise videos that explain in a terse
    way, like that of basic pseudocode, combined with graphical illustrations,
    like those of
    [3Blue1Brown's](https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw).
    They are short enough for my attention span and simple enough for an idiot
    like me to understand.

- My existence

    That's the biggest issue. The fact that I consistently feel like a failure,
    losing points, and forgetting little bits and pieces and even how to solve a
    problem, just makes me exponentially frustrated and makes me feel
    traumatized. It is as though I'm never able to learn from my itty-bitty
    mistakes made in mathematics, even vis-&agrave;-vis the same problems I
    could do before! With the added pressure that I will have to take
    high-school exams soon, my trauma only increases as a function of time.

    Unfortunately, this trauma has made me so stressed that I've become
    obssessed with getting problems right, even though I seem to get them wrong
    like an idiot almost all the time. I'll spend a lot of time in front of the
    computer trying to solve problems on Khan Academy insomuch that I'll often
    forget chores, my pets, my friends &amp; family, and even the fact that I
    have myself to take care of; my parents have gotten extremely worried! I've
    gone into some sort of debilitating depression and anxiety over exams to the
    extent that I always go into a panic attack, shaking and struggling to
    breathe, whenever I do not feel I'm studying for a long time.

    Moreover, my anxiety also originates from the fact that I'm constantly
    failing to do *Khan Academy's Mathematics 1*, which is the curriculum of
    first year high school students, and I can't even do it even though I'm
    already 17! My friends are always ahead of me and I have gotten very, very,
    very jealous about it. One of them was a 17-year-old girl who could do
    calculus (I still can't do calculus) and she seemed to have a good life
    doing mathematics and balancing all her other work. Perhaps it's due to the
    fact that she typesets her essays in size 11pt (very small relative to
    others in her class). Since I've been trying my best to be like people who
    I've gotten jealous of, I have been insisting that all my papers be typeset
    at size 10pt or lower, since this could be the reason why she's so much
    smarter than I am. I'm just illogical because I am so fucking envious!

Because of all this, I oftentimes just moan to myself as to how these algebraic
jargons are even useful in real-life and all; they could very well be just
massive impedimenta.

All this misery has to stop so I can just relax my tits and get on with life
happily like other children whilst (perhaps) my grade goes down. I still have
know idea what the fuck is wrong with me or my brain.

## Aftermath
I don't know if it's just me or a few other students share the same frustration
as I do with Khan Academy and themselves. Maybe it's just me because I'm such a
stupid person &mdash; I'm in high school and I don't even know linear algebra!

Thus, I have created this repository, which is a collection of scripts and
programs I have written so as to help aid Khan Academy students in cheating in
order to quickly find solutions to difficult problems that only adds pain on
their brain no matter how much they learn or try the exercises.

I've designed them to run easily on Linux and interface with the user through a
text-terminal, so there's a very high guarantee that it will work on Linux when
given the right dependencies. If you need to use it on Windows, Mac, BSD, or
whatever, or you want a GUI for all of this, you can fork this project and port
to the OS or conditions you want by yourself.

These scripts and programs are designed to adhere as closely as possible to the
UNIX philosophy, with only a few exceptions every now and again. This is so that
all the scripts are simple to use: simpler than studying mathematics, hopefully.
As for the docs, I've emphasized on writing simple-to-read documentation for
each of the scripts written. The documentation is to be in plaintext and very
easy to access; it is the one and only comprehensive and concise source of
relatively painless documentation as to how to use the scripts to cheat the
relatively painful mathematics of the fucking curriculum.

Whensoever I am faced with a hard problem that I have already learnt, already
know how to solve, comes way too many times, pains my brain because of the
negative signs and shit, and I have already written a solution for; I always use
one of the programs I've already written for that such problem.

## File Hierarchy
It's important that the file hierarchy of this repository be simpler than the
fucking useless mathematics.

I've been saying the word "scripts and programs" and "programs and scripts"
quite a lot. From this point on, I'll just refer to both as "programs."

Starting from the root of the repository (in which this README you are reading
is located), there should be folders named by the levels on Khan Academy. For
example, `math1/` means the topics in *Mathematics 1* (first year high school
mathematics, which isthe one I'm failing at). The namings should be pretty
obvious unless you are an idiot like me.

Descending to one of the levels directory as described previously, you'll find
more folders, each one about one particular exercise or subject matter. For
example, `math1/systems-equations-graphing/` contains programs in separate
folders and documentations for the topic *Systems of equations with graphing* in
the level of *Mathematics 1*.

Inside each folder on a particular subject matter, you'll find programs
written in a few programming languages separated into different folders of
themselves. The different subfolders are called *implementations*
The most common implementations are:

- Pari/GP
- JavaScript
- Fortran

There are no advantages or disadvantages of using one implementation in one
language over another, but they may have a different look-and-feel, although
they ultimately yield the same solution when given a problem from Khan Academy
as they are using a similar, if not the same, algorithm amongst themselves.
They're just in different languages for you to choose. The choice is yours!

Of course, these programs only work for the specific subject matter they are
written for; they aim to do that one thing and do it well. So, do go ahead and
find yourself programs that work for the specific tedium you're trying to tackle
on Khan Academy; if you can't find one, you can create a branch, write your own
program in your favourite programming language and merge it with this
repository.

Remember I said that different implementations in different programming
languages may give a different look-and-feel? Sometimes, they may be drastically
different. So as to keep up with this and make it easy for your already aching
head, the documentation is prepared as a simple plain-text markdown file
`README.md` in each of the subject matter directories containing the programs.
In addition, those documentation may source images, diagrams, and illustrations,
all of which are located in the `docs/` folder relative to the folder where the
individual `README.md` files are at.

Some programming languages allow you to parse input through `stdin` (standard
input), some don't. Basically, different programming languages
require different machine environments on which to run, and have different
capabilities for accepting input and returning output. So, do consult the
documentation as previously described for more details on how to parse input
(the math problem you fucking hate) and get output (glorious and quick answers
to those problems). Despite that, I have tried my best to make the I/O procedure
consistent amongst all implementations, so let's hope my work pays off.

Some programming languages also require specific dependencies to run. If they
are interpreted languages or scripting languages, you may need to find a program
to parse the code and run it. If they are compiled languages, you may need to
find a suitable compiler to compile the code into machine code. Here are some
guidelines that will guarantee a successful run: If you want to &hellip;

- **Parse Pari/GP scripts,** use *Pari/GP* version 2.9.3
  (>=sci-mathematics/pari-2.9.3) or later.
- **Compile Fortran code,** use *GNU Fortran* (`gfortran`) as part of GCC
  version 5.4.0 or later, or any Fortran compiler capable of parsing Fortran
  2008 code.
- **Parse Javscript,** use *Node.js* version 6.9.4 (>=net-libs/nodejs-6.9.4) or
  later.

Information on how exactly to compile and run each script will be explained in
the documentations of each subject matter.

It may be hard to visualize the file hierarchy just by reading some paragraphs
about it, as above. Therefore, it's best that you just browse around the
repository to get the idea of the hierarchy hands-on, or/and use the `tree`
(app-text/tree) utility to get a bird's eye view on the hierarchy right from
your terminal.

## A word of caution
You have this repository full of programs to help you *cheat Khan Academy*, but
it does not mean you should use them all the time. Remember, the point of using
Khan Academy is not to listen to the "Correct!" sound effect and get high on it;
if you want that, just download that sound track and do drugs (*don't do
drugs*). The point of using Khan Academy is to learn mathematics, but do so
painlessly and enjoyably, not in a way that coerces you into being a depressed
motherfucker.

Thus, the programs in this repository serves as a quick, grab-'n-go
over-the-counter, clean solution for the problems that already bore you to
death, particularly problems that come so often that it tires you out and only
makes you perform less and less well and problems that make you feel less
content about yourself. So, I want you to use the programs in this repository,
albeit sparingly; but if you want to improve the algorithms and docs, and add
more programming languages, you are highly encouraged to do so.

With that warning put out, I expect you to already know what to do. This is free
software and comes with no warranty or liability whatsoever, so I do not give a
fuck what you use it for or if it leads you into being lazy with maths and ruins
your grades. Ultimately, you can use this repository how you want, for what
purposes you want. My warning you about how to study mathematics properly is the
furthest I will go, frankly.

This repository does not intend to defame or put hatred on Khan Academy. Khan
Academy is a good website, but some students like me seem not to be able to
handle its sheer greatness and overwhelming amount of practice; some of us
simply lack the patience, will-power, and brain to do so much. So, please
respect Khan Academy for being there, they've actually helped me quite a bit as
well. It's just my mental problems encroaching into many aspects of my life and
making my brain fogged and numb.

## Licensing
All code, documentation, media, and anything contained in this repository is
licensed under the WTFPL (see `LICENSES`).

## Questions?
No? Good. I'm too tired to respond to questions. Good luck, have fun!

Just kidding. I'm Stephanie B. (remember me as the moody teenage girl you read
about on Github). Kik/Snapchat me at `suttiwit` or reach me via Jabber at
`katt@tty1.se`.

<!-- vim: filetype=markdown sw=2 wrap tw=80
-->
