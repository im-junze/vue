import requestHttp from "@/utils/request";

export default{
  async search(params){
    return await requestHttp.post("/auto_rental/dept",params)
  },
  async selectTree(){
    return await requestHttp.get("/auto_rental/dept")
  },
  async save(params){
    return await requestHttp.post("/auto_rental/dept/save",params)
  },
  async update(params){
    return await requestHttp.put("/auto_rental/dept",params)
  },
  async delete(id){
    return await requestHttp.delete(`/auto_rental/dept/${id}`)
  },
  async hasChildren(id){
    return await requestHttp.get(`/auto_rental/dept/${id}`)
  }
}
