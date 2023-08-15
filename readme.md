![](./assets/first-image.png)

## QPapersPlease

It's a fan made "quantum game" that implements simple algorithms to simulate some papers please mechanics.

In this version, you can see a distribution of immigrants allowed to enter Arstotzka, or not.

To understand it better, `clone` this repo, `install` the dependencies and `run` the [papers-please.ipynb](./papers-please.ipynb).

### Requirements
* [Python (3.7.5)](https://www.python.org/downloads/)
* [Pip](https://pypi.org/project/pip/)
* [Pipenv (optional)](https://pipenv.pypa.io/en/latest/)

### Running the algorithm

To run the algorithm notebook, first make sure that all dependencies are installed, for it you can use `pipenv` or just `pip`, if you prefer 

```bash
//pip
pip install -r requirements.txt

//pipenv 
pipenv install
pipenv shell
```

With all installed, you can run the `notebook`

```bash
jupyter-lab
```

In case you want to run the algorithm in a `IBMQ real quantum computer` you will need to go to [https://quantum-computing.ibm.com/](https://quantum-computing.ibm.com/), create an account, [get you API Token](https://quantum-computing.ibm.com/account) and run:

```bash
echo "IBM_API_TOKEN=YOUR_API_TOKEN_HERE" > .env
```


## Copyright

This is a just a fan made project. All Rights are reserved to the creators of the game. If you can, please, support them: [papers please website](https://papersplea.se/).

---

![Arstotzka](./assets/arstotzka.png)

### GLORY ARSTOTZKA!!!!
