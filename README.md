# UML


Easily Generate UML diagrams. Diagrams can include other diagrams as well.

All diagrams must be generated from the root directory.

You will need to have **Graphiz** installed on your computer.



```
uml uml/*.uml uml/**/*.uml
```

This will generate all diagrams in the folder and the subdirectories.



```
uml --watch uml/**/*.uml uml/*.uml
```

Watch and generate diagrams for root and subdirectories.


## Generate for root and subdirectories



See examples under the examples folder.

There are generated png located in there as well.



Want to know what can be done.

[Official Website of PlantUML](http://plantuml.com/)

This just adds a wrapper to make it

1. Generate UML diagrams
2. Watch and Generate diagrams as you work


It has the following concurrency.

It will use a minimum of 1 core and a maximum of 75% of your cpus. If you have only 2 cpus it will use 1 and if you have 3 cpus?? it will use 2.

For the most part it aims to only use 75% of your cpus while generating. This should allow you to work on a large amount of files while still keeping 1 core free.


## Warning
You may not want to generate every uml file.
While it's nice you can set it to only watch a few files.

you can name some files \<name>.uml

and then name the diagrams you want to generate \<name>diagram.uml


This way you can then type ```uml uml/**/*.diagram.uml```
and only the diagrams you want generated will be generated.


Keep in mind for whatever is being generated it will bubble up.

So if you are generating a folder and you make a changed to the child all the diagrams that include that will generate if you are watching them. 

Please use the *.diagram.uml method* as this will be much less cpu intensive.


If you need to brush up on your UML skills then you can use [IBM Document on UML](https://www.ibm.com/developerworks/rational/library/content/RationalEdge/sep04/bell/index.html).


It is a decent place to start.

This has only been tested with Generating Class Diagrams as this is only what I needed. 
It stands to reason that it can generate all the other diagram types too but has not been tested.



