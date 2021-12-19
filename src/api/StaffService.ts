import {ISpecificStaff, IStaffByMovie} from "types"
import {fetchMoviesOrStaff as fetchStaff} from "helpers";

export default class StaffService {

  static async getStaffByMovie(movieId: number) {
    const url = `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`
    return await fetchStaff(url) as IStaffByMovie[]
  }

  static async getSpecificStaff(staffId: number) {
    const url = `https://kinopoiskapiunofficial.tech/api/v1/staff/${staffId}`
    return await fetchStaff(url) as ISpecificStaff
  }
}