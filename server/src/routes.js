const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const TensorFlowController = require('./controllers/TensorFlowController')
const UploadSingleController = require('./controllers/UploadSingleController')
const ListClassifiersController = require('./controllers/ListClassifiersController')
const CreateClassifierController = require('./controllers/CreateClassifierController')
const ChangeClassifierController = require('./controllers/ChangeClassifierController')
const UploadZipFileController = require(('./controllers/UploadZipFileController'))

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
  app.get('/classify',
    TensorFlowController.classify)
  app.post('/uploadImage',
    UploadSingleController.uploadImage)
  app.post('/uploadZipFile',
    UploadZipFileController.uploadZipFile)
  app.get('/listClassifiers',
    ListClassifiersController.listClassifiers)
  app.get('/createClassifier',
    CreateClassifierController.createClassifier)
  app.post('/changeClassifier',
    ChangeClassifierController.changeClassifier)
  app.get('/showCurrentClassifier',
    ChangeClassifierController.showCurrentClassifier)
}
