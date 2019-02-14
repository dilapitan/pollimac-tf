import Api from '@/services/Api'

export default {
  createClassifier () {
    return Api().get('createClassifier')
  }
}
