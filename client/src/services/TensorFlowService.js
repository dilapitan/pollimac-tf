import Api from '@/services/Api'

export default {
  classify () {
    return Api().get('classify')
  }
}
