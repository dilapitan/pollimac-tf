import Api from '@/services/Api'

export default {
  showCurrentClassifier () {
    return Api().get('showCurrentClassifier')
  }
}
