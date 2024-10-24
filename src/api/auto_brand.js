import requestHttp from "@/utils/request";

export default {
  async search(start,size,data){
    return await requestHttp.post(`/auto_rental/autoBrand/${start}/${size}`,data);
  },
  async delete(id){
    return await requestHttp.delete(`/auto_rental/autoBrand/${id}`);
  },
  async save(data){
    return await requestHttp.post(`/auto_rental/autoBrand`,data);
  },
  async update(data){
    return await requestHttp.put(`/auto_rental/autoBrand`,data);
  },

  async selectByMakerId(makerId){
    return await requestHttp.get(`/auto_rental/autoBrand/${makerId}`);
  }
};
