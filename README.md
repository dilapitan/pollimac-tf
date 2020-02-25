## POLLIMAC TF

Pollimac TF stands for "Pollen Image Classifier" using TensorFlow.
Pollimac TF is an extension of the original SP of Prof. Joman Encinas. It was created using TensorFlow and its pre-classified image classifier, coupled with NodeJS and VueJS for its system.

###### Setting the app
1. Install [TensorFlow](https://www.youtube.com/watch?v=Pgu81wbmWNU&t=4s)
2. After installing TensorFlow, run the virtual environment before opening your terminals. Upon running the virtual environment via TensorFlow with the command `source activate mycondaenv`, it should look like:

```
(mycondaenv) $         
```
Note: TensorFlow can now be ran with Docker. 

###### Running the app

1. Open 2 terminals, one for the `client`, and one for the `server`.
```
cd pollimac-tf/client # terminal for the client
cd pollimac-tf/server # terminal for the server
```

2. Run `npm install` on `client` and `server`. Make sure that the version of Node is version 8 or higher.
Note: I'm experiencing an error upon `npm install` on the server. Just use the Node version 8.11.1 (switching/installing Node versions is easy with [nvm](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/))

3. After installing the packages, run `npm start` on the server. It should run on `port 8081`. Remember that this should be ran while inside the virtual environment. The virtual environment is only needed for the `server` folder.

4. After running the server, run `npm start` on the client. It should run on `port 8080`.

5. Open your browser and go to `localhost:8080`.
