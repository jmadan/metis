import offersData from '../data/offers';
import axios from 'axios';
import * as Utils from './utils';

const APIKEY = process.env.MONGOAPI;
const HOST = "https://api.mlab.com";
const PATH = "/api/1/databases";
const DATABASE="heroku_jsm0wktv";

export const fetchData = () => {
  return offersData.content;
}

export const addOffer = (offer) => {
  let newOffer = Object.assign({}, offer, {offerId: Utils.GenerateGUID()})
  const url = HOST+"/"+PATH+"/"+DATABASE+"/collections/offers?apiKey="+APIKEY;
  return axios.post(url, newOffer).then((res) => {
    return res;
  }).catch((error) => {
    console.error(error);
  });
}

export const updateOffer = (offer) => {
  const url = HOST+"/"+PATH+"/"+DATABASE+"/collections/offers?q={'_id': "+JSON.stringify(offer._id)+"}&apiKey="+APIKEY;
  const f_data = {
      "offerId": offer.offerId,
      "title": offer.title,
      "longDescription": offer.longDescription,
      "shortDescription": offer.shortDescription,
      "startsOn": offer.startsOn,
      "endsOn": offer.endsOn,
      "type": offer.type
    }
  return axios.put(url, f_data).then((res) => {
    return res;
  }).catch((error) => {
    return error;
  });
}

export const fetchOffers = () => {
  const url = HOST+"/"+PATH+"/"+DATABASE+"/collections/offers?apiKey="+APIKEY;
  return axios.get(url).then((res) => {return res});
}

export const fetchOffer = (id) => {
  const url = HOST+"/"+PATH+"/"+DATABASE+"/collections/offers?q={'offerId':\""+id+"\"}&fo=true&apiKey="+APIKEY;
  return axios.get(url).then((res) => {return res});
}
