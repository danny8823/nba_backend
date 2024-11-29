const { default: axios } = require('axios')
const asyncHandler = require('express-async-handler')

const nbaAPI_Controller = {
    get_team: asyncHandler(async(req,res) => {
        const api_url = 'https://api-nba-v1.p.rapidapi.com/teams'

        try{
            const response = await axios.get(api_url, {
                headers: {
                    'x-rapidapi-key': '56b19805acmsh0e837faf42ee38ap1de4abjsnc6e3111f9c12',
                    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
                }
            })
            res.status(200).json(response.data.response)
        } catch(error) {
            console.log(error.message)
        }
    })
}

module.exports = nbaAPI_Controller