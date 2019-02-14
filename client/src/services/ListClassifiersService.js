import Api from '@/services/Api'

export default {
  listClassifiers () {
    return Api().get('listClassifiers')
  }
}
