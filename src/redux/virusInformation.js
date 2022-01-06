import axios from 'axios';
export const FETCH_VIRUS = 'data/FETCH_VIRUS';

const LOAD_COUNTRIES = 'countries/LOAD_COUNTRIES';

const initialState = {}

const loadCountries = (payload) => ({
    type: LOAD_COUNTRIES,
    payload,
})

export const fetchVirus = async (dispatch) => {
    console.log("fetch data theo ngay");
    const currentDate = new Date().toISOString().slice(0,10);
    const fetch = await axios(`https://api.covid19tracking.narrativa.com/api/${currentDate}`);
    console.log("data", fetch.data);
    const totalConfirmed = fetch.data.total.today_confirmed;
    const {countries} = fetch.data.dates[currentDate];
    dispatch(loadCountries({countries,totalConfirmed}))
};

const reducer = (state= initialState, action)=> 
{
    switch(action.type){
        case LOAD_COUNTRIES:
            return action.payload;
        default:
            return state;
    }
}
export default reducer;