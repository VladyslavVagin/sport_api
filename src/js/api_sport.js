import axios from "axios";

export default class GetExerciseFromApi {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async getExercise() {
        const response =  await axios({
            method: 'get',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            params: {limit: '10'},
            headers: {
              'X-RapidAPI-Key': '16e2b75b37mshbf6cdb29509d27bp1adb1bjsn893af8bb79d1',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' }
          })
          return response.data;
    }
}

   