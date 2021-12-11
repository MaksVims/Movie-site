import fetchStaff from "+/fetchMoviesOrStaff";
import {ISpecificStaff, IStaffByMovie} from "#/staffTypes";

export default class StaffService {

  static async getStaffByMovie(movieId: number):Promise<IStaffByMovie[]>  {
    const url = `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`
    return await fetchStaff(url)
  }

  static async getSpecificStaff(staffId: number):Promise<ISpecificStaff>  {
    const url = `https://kinopoiskapiunofficial.tech/api/v1/staff/${staffId}`
    return await fetchStaff(url)
  }
}