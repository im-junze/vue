import requestHttp from "@/utils/request"

export default {
  async search(start, size, data) {
    return await requestHttp.post(`/auto_rental/autoMaker/${start}/${size}`, data)
  },
  async delete(id) {
    return await requestHttp.delete(`/auto_rental/autoMaker/${id}`)
  },
  async save(data) {
    return await requestHttp.post(`/auto_rental/autoMaker`, data)
  },
  async update(data) {
    return await requestHttp.put(`/auto_rental/autoMaker`, data)
  },
  async selectAll() {
    return await requestHttp.get(`/auto_rental/autoMaker`)
  }
}
