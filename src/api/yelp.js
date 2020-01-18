import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Ea8_yQf0TQT1zGdrfQiRMKpKE8jAHmptaG9VNrpgMJfvYEdi_XQi8YJRMO1aUZpDuzacipMNaxpz9JCxQGQnhtyXgXoR9qVJIahDI6IZ8PFdUHFq98oSamGcXJoTXnYx'
    }
});