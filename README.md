# LorentzWheel.github.io

Welcome to a  Lorentz wheel simulator. The purpose of this web page is to allow you to take your first steps in understanding chaotic phenomena and understanding their general principles. It is a physical model, which although simplistic, will allow you to explore certain notions such as sensitivity to initial conditions or understand what a lorentz attractor is.

## System Description
A Lorenzian (or "chaotic") paddle wheel is a physical model that perfectly matches Lorenz's equations. A chaotic paddle wheel is like a normal paddle wheel, except for the fact that its buckets leak. The water flows into the top bucket at a steady rate and gives energy to the system while the water escapes from each bucket at a steady rate and removes the energy from the system.
If the wheel parameters are set correctly, the wheel will exhibit chaotic movement: rather than turning in one direction at a constant speed, the wheel will accelerate, slow down, stop, change direction and oscillate between combinations of behaviors in an unpredictable way.

![image](https://user-images.githubusercontent.com/129672940/232691595-4c7bc03e-ecec-43a9-ab71-519a934d15f7.png)

At time T0 we present a flow Q on top of the wheel. This flow rate will remain constant throughout the simulation. The wheel having a slight angle the dawn that begins to fill will create a moment and generate a variation of angle. At time T1, W1 becomes positive and the wheel is rotating. Over the following times each blade will follow its own mass variation depending on the input rate and the size of the hole. We will go into more detail in the simulation section.

## Study Tools
Beyond the simulation of the system, several graphs will be used for data analysis. This analysis is mainly based on 2 types of graphs: attractors and bifurcation diagrams. A third graph will allow a simple follow-up of the values of the rotational speed for each wheel.

| Attractor | Bifurcation Diagram | Rotation Speed|
|--|--|--|
|The Lorenz attractor is a fractal structure corresponding to the long-term behavior of the Lorenz oscillator. The attractor shows how the different variables of the dynamical system evolve over time into a non-periodic trajectory. |In mathematics, and in particular in the study of dynamical systems, a bifurcation diagram illustrates the values visited asymptotically (fixed points, periodic points, chaotic attractors) by a system as a function of a parameter | Simple representation or rotational speed in function of time |
