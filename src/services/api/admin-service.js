import { getResource } from './common-service';

class AdminService {

    getUser = async (id) => {
        return await getResource(`/users/${id}/`)
      };

    getUsers = async (login="", lastname="") => {
      let url;
      login || lastname ? url='/users?' : url='/users/';
      if(login) {
        url = url + `login=${login}`;
      }
      if(lastname) {
        url = url + `lastname=${lastname}`;
      }
      
      return await getResource(url)
    };

    addUser = () => {};

    updateUser = () => {};

    setTempPassword = () => {};




}

export default new AdminService;