import axios from "axios";

        
        // const token = "1073be75b644492954fabacd6907beac9b18c21fcb90ffb8ad30e233896990fdb1ebcec5dd940b13a9535b5c9c8e23389f7251f0e3b3b2fb83c50d54fe0e1632c73fef15b2792142b53a2e640a0b03741b9dd79c2704f40c9d0bd89abcddf5fafe4c8cae86e0891108ed14dbb9b9a26e39f3e307899024d3db9d09811e81e265";

// api request call
export const Request = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        // authorization using bearer token
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
});