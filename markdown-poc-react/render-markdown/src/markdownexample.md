# Tensorflow on M1 Mac Guide

## Before proceeding with this guide

Setting up TensorFlow on the M1 Mac may take a lot of time and effort and isn't necessary to succeed in CS1430. If you don't want to install TensorFlow locally, you can instead write code locally, push to git, pull to your GCP machine, and run code there. However, if you really want to be able to run TensorFlow locally on your M1 Mac, we hope that this guide can help you with the installation.

## Descriptions of Required Softwares

In order to get Tensorflow 2.5 working on the M1 Mac, we need to install the following software.

Guides on how to install the software on the M1 Mac can be found after this section.

1. **Homebrew:**
   Homebrew is a package management system that makes installing and updating applications and utilities on a Mac easier. It makes the process smooth and straightforward and can be run from the command line.

2. **XCode Command Line Tools:**
   Out of the box, a Mac does not contain all the necessary software and tools needed for programming. Apple provides a complete development environment for programmers called XCode. However, the full XCode package is huge (about 40GB). Fortunately Apple provides a separate and much smaller download called XCode Command Line Tools, that installs the most needed utilities for software development.
   Here, you can find the complete list of what comes with the XCode Command Line Tools: <https://mac.install.guide/commandlinetools/8.html>

3. **Miniforge:**
   Miniforge is a community driven minimalistic conda installer. conda is a cross-platform package and environment manager that installs and manages conda packages. Compared to miniconda, which is a company driven (Anaconda) minimalistic conda installer, miniforge package installations come from the conda-forge channel and not Anaconda.
   Miniforge was formulated as miniconda does not support the aarch64 architecture that is used on the M1 Mac.

## Part 1: Install Homebrew

Homebrew is a package management system that makes installing software easier. In this guide, we will be using Homebrew to install the required software. First, open terminal on your computer. Then, install Homebrew by running the following command:

```Bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Enter you password if the installation asks for it.

Once Homebrew finishes installing, it will ask you to run two commands. The commands save a script for running Homebrew in the future. Run the following two commands:

```Bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/<YOUR_USERNAME_HERE>/.zprofile
```

```Bash
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Next, close the terminal window you just installed Homebrew in and open a new one. Sometimes, the installation won't take effect on an already open window so closing and reopening the window guarantees that the changes take effect.

Finally, to make sure that Homebrew installed correctly, run the command

```Bash
brew --version
```

Once you have installed Homebrew, you are ready to move on and install xcode-select command-line utilities and Miniforge.

## Part 2: Install Software using Homebrew

Now, we will use Homebrew to install the rest of the required software. Install the xcode command-line utilities:

```Bash
xcode-select --install
```

If terminal throws an error saying that the command line tools are already installed, that is ok. Homebrew will also install xcode tools during Homebrew's installation.

Next, we will install Miniforge using Homebrew. Run the command

```Bash
brew install miniforge
```

To change to the correct version of Python, run the command

```Bash
conda init "$(basename "${SHELL}")"
```

Finally, to check that you are using the correct version of Python, run the commands

```Bash
conda activate
```

and then

```Bash
which python
```

The command `conda activate` enables the conda virtual environment, while the command `which python` prints the path of the Python version you are using. `which python` should print out the path `/opt/homebrew/Caskroom/miniforge/base/bin/python`. The most important parts are that it includes `homebrew`, `Caskroom`, and `miniforge`. If this path prints out, everything is working correctly. Make sure that the current environment in use is `(base)`. The current environment in use would be the left most text of the current line in your terminal. See below for an example:

```Bash
(base) <USERNAME>@<MACHINE_NAME> ~ %
```

## Part 3: Creating Tensorflow Environment

For this next part, we will create a new Python environment where we can run TensorFlow. First, deactivate your conda environment again using the command

```Bash
conda deactivate
```

Next, we will create a folder for the environment. In this tutorial, we will create a folder called `CS1430_TF` on your desktop, but it can be called anything and be anywhere on your computer. Run the following commands to make the new folder and to change the working directory in the terminal to be in `CS1430_TF`.

```Bash
mkdir ~/Desktop/CS1430_TF
```

```Bash
cd ~/Desktop/CS1430_TF
```

Download m1-mac-requirements.yml [from the course website](https://browncsci1430.github.io/webpage/m1-mac-requirements.yml) and place it into the `CS1430_TF` folder on your desktop.

To set up the new virtual environment, run the command

```Bash
conda env create -f m1-mac-requirements.yml -n tensorflow
```

Before you run this command, make sure you are not on `(base)` or any other environment. If you are on `(base)`, you will need to deactivate it first by running `conda deactivate`.

Activate the conda environment

```Bash
conda activate tensorflow
```

While in this virtual environment, you can run Python files that use TensorFlow using the command

```Bash
python3 <FILENAME>.py
```

And with that, you should be done! Congrats on getting TensorFlow to work on your Mac! :)

## Resources

The m1-mac-requirements.yml file can be found here:

<https://browncsci1430.github.io/webpage/m1-mac-requirements.yml>

If you get stuck or need more information, the following guides may be helpful:

<https://www.youtube.com/watch?v=_CO-ND1FTOU>

<https://github.com/jeffheaton/t81_558_deep_learning/blob/master/install/tensorflow-install-mac-metal-jul-2021.ipynb>

## Acknowledgements

Many thanks to Professor Jeff Heaton at Washington University in St. Louis. This guide is based on the tutorial and resources he has made available online.
