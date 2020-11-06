import { API } from './config';
import { Auth } from "aws-amplify";

const getHeaders = async() => ({
    'Authorization': `Bearer ${(await Auth.currentSession()).getIdToken().jwtToken}`,
    'Content-Type': 'application/json',
    'Accept': '*/*'
});

export const getCrawlers = async () => {
    const response = await fetch(`${API}/crawlers`, {
        headers: await getHeaders()
    });

    if (response.ok) {
        return response.json();
    }

    throw Error(response.statusText);
}

export const getCrawler = async (id) => {
    const response = await fetch(`${API}/crawlers/${id}`, {
        headers: await getHeaders()
    });

    if (response.ok) {
        return response.json();
    }

    throw Error(response.statusText);
}

export const modifyCrawler = async (data) => {
    await fetch(`${API}/crawlers`, {
        method: 'PUT',
        headers: await getHeaders(),
        body: JSON.stringify(data)
    })
}