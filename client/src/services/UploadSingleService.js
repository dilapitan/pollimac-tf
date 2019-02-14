import Api from '@/services/Api'

export default {
  uploadImage () {
    return Api().post('uploadImage')
  }
}
