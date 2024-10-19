import axios from "axios";
import API_ENV from "../config/api.config";

/**
 * Function login. Make login request to api
 * @param {String} email
 * @param {String} password
 */
// export async function login(email, password) {
//     const apiUrl = API_ENV.apiUrl;
//     try {
//         const response = await axios.post(
//             `${API_ENV.apiUrl}/auth/login`,
//             JSON.stringify({
//                 email: email,
//                 password: password,
//             }),
//             { headers: { "Content-Type": "application/json" } }
//         );

//         console.log(response);
//         return response.data;
//     } catch (error) {
//         console.log(err);
//         return Promise.reject(err);
//     }
// }

export async function login(email, password) {
    const apiUrl = API_ENV.apiUrl;
    try {
        const response = await fetch(`${apiUrl}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: email,
                password: password,
                expiresInMins: 30, // optional, defaults to 60
            }),
            // credentials: "include", // Include cookies (e.g., accessToken) in the request
        });

        console.log("response: ", response);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Ошибка аутентификации");
        }
        console.log("response.data: ", data);

        return data;
        // return response;
    } catch (error) {
        console.log(error);

        return Promise.reject(error);
    }
}

// Регистрация
// Сброс пароля
